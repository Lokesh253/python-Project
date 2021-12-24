from gtts import gTTS
import os

with open('Output.txt') as f:
    myText = f.read() 
    f.close()
language = "en"

voice = gTTS(text=myText, lang=language, slow=False)

voice.save("output.mp3")

os.system("start output.mp3")
