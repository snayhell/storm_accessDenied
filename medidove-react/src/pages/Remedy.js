import React, { useState, useEffect } from 'react';
import { HfInference } from '@huggingface/inference';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
import Ai from './ezgif-5-5adf764279.gif'
import ai from './ai.png'
import HomeHeader from "./Home/Home/HomeHeader/HomeHeader";

const Remedy = () => {
  const [inputText, setInputText] = useState('');
  const [audioDataUrl, setAudioDataUrl] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(true);
  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/generation",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2E0ODk0MjktZGIwMS00YzMyLTgwNmYtZmI3YzgyMzkzMWYzIiwidHlwZSI6ImFwaV90b2tlbiJ9.zb2xQc9BJybAGp0EX3fDuDjtvTB-_Uqe5NZ16wDW9Hg",
    },
    data: {
      providers: "openai",
      text: toggle
        ? `i am a 4 month women having ${question} give home remedies in desi indian solutions in lines , only state the solution in 15-20 words,give advice like a doctor,DO NOT GIVE IT IN POINTS`
        : `i am a women having a 2 month baby suffering from ${question} give me some home remedies in desi indian solutions, only state the solution in 15-20 words give advice like a doctor`,
      temperature: 0.3,
      max_tokens: 50,
    },
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInputText(transcript);
      setQuestion(transcript)
    }
  }, [transcript]);
  useEffect(() => {
    // Automatically click the "Generate Audio" button when the answer is available
    if (answer) {
      document.getElementById('generate-audio-button').click();
    }
  }, [answer]);
  const handleTextToSpeech = async () => {
    try {
      const hf = new HfInference('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');
      const result = await hf.textToSpeech({
        model: 'espnet/kan-bayashi_ljspeech_vits',
        inputs: answer,
      });

      // Convert the Blob to a data URL
      const reader = new FileReader();
      reader.onload = () => {
        setAudioDataUrl(reader.result);
      };
      reader.readAsDataURL(result);
      handleResetAudio();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleResetAudio = () => {
    setAudioDataUrl(null);
  };

  const handleQuestionSubmit = async () => {
    axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      setData(response.data);
      setAnswer(response.data.openai.generated_text)
    })
    .catch((error) => {
      console.error(error);
    });
  };
  

  useEffect(() => {
    // Automatically click the "Submit Question" button when the microphone goes off
    if (!listening && inputText) {
      handleQuestionSubmit();
     
    }
  }, [listening, inputText]);
 
  const handleStartMicrophoneClick = () => {
    setAnswer('');
    SpeechRecognition.startListening();
    
  };
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  return (<>
    <HomeHeader/>
    <div style={{marginTop:"100px"}}>
      <h1 style={{display:"none"}}>Speech-to-Text, Text-to-Speech, and Question Answering</h1>
      <div >
        <button onClick={handleStartMicrophoneClick} style={{position:"absolute" ,backgroundColor:"red",borderRadius:"10px",fontSize:"25px",padding:"20px",color:"white"}}>Start Microphone</button>
        <button style={{display:"none"}}onClick={SpeechRecognition.stopListening}>Stop Microphone</button>
        <button style={{display:"none"}}onClick={resetTranscript}>Reset Transcript</button>
      </div>
      <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <p style={{display:"none"}}>Transcript: {transcript}</p>
      </div>
      <div style={{display:"none"}}>
        <h2>Speech-to-Text Result:</h2>
        <textarea
          rows="4"
          cols="50"
          value={answer}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>
      <button style={{display:"none"}} id="generate-audio-button" onClick={handleTextToSpeech}>Generate Audio</button>
      <button style={{display:"none"}}onClick={handleResetAudio}>Reset Audio</button>

      {audioDataUrl && (
        <div style={{display:"none"}}>
          <h2>Audio Output:</h2>
          <audio controls autoPlay>
            <source src={audioDataUrl} type="audio/flac" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    
      <div style={{display:"none"}}>
        <label >Question:</label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setQuestion(e.target.value)}
          readOnly={listening}
        />
      </div>
      <button style={{display:"none"}}onClick={handleQuestionSubmit}>Submit Question</button>
      <div style={{display:"none"}}>
        <h2>Answer:</h2>
        <p>{answer}</p>
      </div>
     
  <img src={Ai} alt="" style={{ width: "100vw", height: "100vh" }} />


      {answer?<div style={{position:"absolute",top:"10",bottom:"0",left:"0",right:"0",fontSize:"40px"}} >Nuskha is thinking.....</div>:<></>}
    </div>
    </>
  );
};

export default Remedy;
