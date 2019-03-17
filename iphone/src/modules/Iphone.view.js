import React from 'react';
import '../assets/css/iphone.scss';

export const IphoneView = ({usertext,userInput,shifter}) =>{

    const updateText =(e)=>{
        userInput(e)
    }

    const updateShift = (e)=>{
        shifter(e)
    }

    return (
            <div className="pad">
                <div className="dial-pad">
                    <div className="contact">
                    <div className="avatar avimg"></div>
                    <div className="contact-info">
                        <div className="contact-name">Matt Sich</div>
                        <div className="contact-position">CodePenner</div>
                        <div className="contact-number">
                        (123) 456 - 7890
                        </div>
                    </div>
                    <div className="contact-buttons">
                        <button className="icon-message msgimg"></button>
                        <button className="icon-video vidmsg"></button>
                    </div>
                </div>
                <div className="phoneString">
                   <input type="text" value={usertext}  maxLength='15' disabled />
                </div>
                <div className="digits">
                <div className="dig pound number-dig" name="1" onClick={e=> updateShift(37)}>Left</div>
                <div className="dig pound number-dig" name="1" ></div>
                <div className="dig pound number-dig" name="1" onClick={e=> updateShift(39)}>Right</div>
                <div className="dig pound number-dig" name="1" onClick={e=> updateText(1)}>1</div>
                <div className="dig number-dig" name="2" onClick={e=> updateText(2)}>2
                    <div className="sub-dig">ABC</div>
                </div>
                <div className="dig number-dig" name="3" onClick={e=> updateText(3)}>3
                    <div className="sub-dig">DEF</div>
                </div>
                <div className="dig number-dig" name="4" onClick={e=> updateText(4)}>4
                    <div className="sub-dig">GHI</div>
                </div>
                <div className="dig number-dig" name="5" onClick={e=> updateText(5)}>5
                    <div className="sub-dig">JKL</div>
                </div>
                <div className="dig number-dig" name="6" onClick={e=> updateText(6)}>6
                    <div className="sub-dig">MNO</div>
                </div>
                <div className="dig number-dig" name="7"  onClick={e=> updateText(7)}>7
                    <div className="sub-dig">PQRS</div>
                </div>
                <div className="dig number-dig" name="8"  onClick={e=> updateText(8)}>8
                    <div className="sub-dig">TUV</div>
                </div>
                <div className="dig number-dig" name="9"  onClick={e=> updateText(9)}>9
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