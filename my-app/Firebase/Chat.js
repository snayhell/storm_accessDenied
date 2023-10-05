import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Pressable,
} from "react-native";
import {
  addDoc,
  collection,
  serverTimestamp,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./Firebase.config";
import { UserContext } from "../App";

const Chat = (props) => {
  const { room, setRoom } = props;
  const { userData, setUserData } = useContext(UserContext);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = collection(db, "messages");

  // Load initial messages and set up real-time updates
  useEffect(() => {
    const q = query(messageRef, orderBy("createAt",'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedMessages = [];
      querySnapshot.forEach((doc) => {
        updatedMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(updatedMessages);
    });

    return () => {
      // Unsubscribe from real-time updates when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleSubmit = async () => {
    if (text === "") return;

    await addDoc(messageRef, {
      text: text,
      createAt: serverTimestamp(),
      user: userData.name,
      room,
    });

    setText("");
  };

  return (
    <View style={{ height: 700 }}>
      <TouchableOpacity style={{ padding: 20, backgroundColor: 'white', borderRadius: 50, marginTop: 10, width: 100, marginLeft: 5 }} onPress={() => setRoom(false)}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ display: 'flex', flexDirection: 'column', margin: 3 }}>
            <Text style={{ fontWeight: 500 }}>
              {item.user}:
            </Text>
            <View style={{ marginTop: 5 }}>
              <Text style={{ display: 'flex', backgroundColor: '#fff', padding: 5, width: item.text.length * 25, borderRadius: 20, height: 30 }}>
                {` `}{item.text}
              </Text>
            </View>
          </View>
        )}
        inverted={true} // Render messages in reverse order
      />
      <Pressable style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingBottom: 10, marginTop: 10 }}>
          <TextInput
            style={{ backgroundColor: '#fff', padding: 10, width: '87%' }}
            onChangeText={(text) => setText(text)}
            value={text}
            placeholder="Type your message here"
          />
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={{ backgroundColor: '#000', color: '#fff', padding: 10, width: 70, marginLeft: -20 }}>Send</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
};

export default Chat;
