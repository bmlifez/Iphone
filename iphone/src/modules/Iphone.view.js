import React from 'react';
import '../assets/css/iphone.scss';

export const IphoneView = ({usertext,userInput,shifter,suggestion,list,updaterEvent}) =>{

    const updateText =(e)=>{
        userInput(e)
    }

    const updateShift=(e)=>{
        shifter(e)
    }

   

    function debounce(fn, wait,e) {
      
        var timeout;
        e && e.persist();
        return function() {
          
            var context = this;
            var args = arguments;
            
            clearTimeout(timeout);
            
            timeout = setTimeout(function(event) {
               
                fn.apply(context, args);
            }, wait);
        };
    };

    let myEfficientFn = debounce(function(val,e) {
        e.persist()
        // All the taxing stuff you do
        if (e.detail === 7) {
            userInput(val[6]);
          
       }
       if (e.detail === 6) {
            userInput(val[5])
          
       }
       if (e.detail === 5) {
             userInput(val[4]);
          
       }
       if (e.detail === 4) {
             userInput(val[3])
           
       }
       if (e.detail === 3) {
             userInput(val[2])
          
       }
       if (e.detail === 2) {
            userInput(val[1])
          
       }
       if (e.detail === 1) {
            userInput(val[0])
         
       }
    }, 250);

   

    
    
    

   
    return (
            <div className="pad">
                <div className="dial-pad">
                    <div className="contact">
                </div>
                <div className="phoneString">
                   <input type="text" value={usertext}  maxLength='15' disabled />
                </div>
                <div className="digits">
               
                     
                   
                <div className="dig pound number-dig" name="1" onClick={e=> updateShift(37)}>Left</div>
                <div className="dig pound number-dig" name="1" ></div>
                <div className="dig pound number-dig" name="1" onClick={e=> updateShift(39)}>Right</div>
                <div className="dig pound number-dig" name="1" onClick={e=> updateText(1)}>1</div>
                <div className="dig number-dig" name="2"  onClickCapture={e=> myEfficientFn(['2','a','b','c','aa','ab','ac'],e)}>2
                    <div className="sub-dig">ABC</div>
                </div>
                <div className="dig number-dig" name="3" onClickCapture={e=> myEfficientFn(['3','d','e','f','dd','de','df'],e)}>3
                    <div className="sub-dig">DEF</div>
                </div>
                <div className="dig number-dig" name="4" onClickCapture={e=> myEfficientFn(['4','g','h','i','gh','hi','ig'],e)}>4
                    <div className="sub-dig">GHI</div>
                </div>
                <div className="dig number-dig" name="5"   onClickCapture={e=> myEfficientFn(['5','j','k','l','jk','kl','lj'],e)}>5
                    <div className="sub-dig">JKL</div>
                </div>
                <div className="dig number-dig" name="6"   onClickCapture={e=> myEfficientFn(['6','m','n','o','mn','no','om'],e) }>6
                    <div className="sub-dig">MNO</div>
                </div>
                <div className="dig number-dig" name="7"   onClickCapture={e=> myEfficientFn(['7','p','q','r','s','pq','rs'],e) }>7
                    <div className="sub-dig">PQRS</div>
                </div>
                <div className="dig number-dig" name="8"   onClickCapture={e=> myEfficientFn(['8','t','u','v','tu','uv','vt'],e) }>8
                    <div className="sub-dig">TUV</div>
                </div>
                <div className="dig number-dig" name="9"   onClickCapture={e=> myEfficientFn(['9','w','x','y','z','wx','xy'],e) }>9
                    <div className="sub-dig">WXYZ</div>
                </div>
                <div className="dig number-dig astrisk" name="*"  onClick={e=> updateText('*')}>*</div>
                <div className="dig number-dig pound" name="0"  onClick={e=> updateText(0)}>0</div>
                <div className="dig number-dig pound" name="#"  onClick={e=> updateText('#')}>#</div>
                </div>
               
            </div>
            <div className="call-pad">
                <div className='pulsate'>
                <div></div>
                <div></div>
                <div></div>
                </div>
                <div className="ca-avatar avatarimg"></div>
                <div className="ca-name">Matt Sich</div>
                <div className="ca-number">123 456 7890</div>
                <div className="ca-status" data-dots="...">Calling</div>
                <div className="ca-buttons">
                <div className="ca-b-single contactimg" data-label="Add Contact">
                </div>
                <div className="ca-b-single muteimg" data-label="Mute">
                </div>
                <div className="ca-b-single speakerimg" data-label="Speaker"></div>
                <div className="ca-b-single singleimg" data-label="Face to Face">
                </div>
                <div className="ca-b-single bubbleimg" data-label="Chat">
                </div>
                <div className="ca-b-single keypadbck" data-label="Keypad" >
                </div>
                </div>


            </div>

           
        </div>
    )
}