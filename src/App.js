import logo from './logo.svg';
import './App.css';

import {sha256} from 'crypto-hash';
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { useEffect } from 'react';

function App() {


    const useragent = navigator.userAgent

    var mainObj = {}
    
   
  const hash = async(str) =>{
    const print = await sha256(str)
    console.log(print)
  }
  
  
  
    // fpPromise
    //   .then(fp => fp.get())
    //   .then(result => {
    //     // This is the visitor identifier:
    //     const visitorId = result.visitorId
    //     console.log(result)
    //     mainObj["timeZone"] = result.components.timezone.value
    //     mainObj["userAgent"] = useragent
    //     mainObj["canvas"] = result.components.canvas.value
    //     mainObj["screenRes"] = result.components.screenResolution.value
    //     mainObj["plugins"] = result.components.plugins.value
    //     mainObj["fontsJS"] = result.components.fonts.value
    //     mainObj["deviceMemory"] = result.components.deviceMemory.value
    //     // console.log(result.components.sessionStorage)
    //     // console.log(mainObj)
    //     // console.log(JSON.stringify(mainObj))
    //     hash(JSON.stringify(mainObj))
    //   })

    
      useEffect(() => {
        FingerprintJS.load()
            .then((fp) => fp.get())
            .then((result) => {
              console.log(result)
              mainObj["timeZone"] = result.components.timezone.value
              mainObj["userAgent"] = useragent
              mainObj["canvas"] = result.components.canvas.value
              mainObj["screenRes"] = result.components.screenResolution.value
              mainObj["plugins"] = result.components.plugins.value
              mainObj["fontsJS"] = result.components.fonts.value
              mainObj["deviceMemory"] = result.components.deviceMemory.value
              // console.log(result.components.sessionStorage)
              // console.log(mainObj)
              // console.log(JSON.stringify(mainObj))
              hash(JSON.stringify(mainObj))
            });
    }, []);

  return (
    <div className="App">
      TEst hello
    </div>
  );
}

export default App;
