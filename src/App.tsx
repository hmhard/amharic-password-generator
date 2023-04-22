import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, Checkbox, Input, Option, Select, Typography } from '@material-tailwind/react';

function App() {
  const generateText = () => {
    let result = '';
    const amharic_letters = 'ሀሁሂሃሄህሆለሉሊላሌልሎሐሑሒሓሔሕሖመሙሚማሜምሞሠሡሢሣሤሥሦረሩሪራሬርሮሰሱሲሳሴስሶሸሹሺሻሼሽሾቀቁቂቃቄቅቆቇበቡቢባቤብቦቨቩቪቫቬቭቮተቱቲታቴትቶቸቹቺቻቼችቾነኑኒናኔንኖኘኙኚኛኜኝኞአኡኢኣኤእኦከኩኪካኬክኮኰኲኳኴኵኸኹኺኻኼኽኾወዉዊዋዌውዎዏዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦየዩዪያዬይዮዯደዱዲዳዴድዶዷዸዹዺዻዼዽዾዿጀጁጂጃጄጅጆጇገጉጊጋጌግጎጏጐጒጓጔጕጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾፀፁፂፃፄፅፆፇፈፉፊፋፌፍፎፐፑፒፓፔፕፖፗፘ';
    const alphabet = includeEnglish ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    const numbers = includeNumbers ? '0123456789' : '';
    const symbols = includeSymbols ? '!@#$%^&*()+' : '';
    let characters = amharic_letters + alphabet + numbers + symbols
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < passwordLength) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    setPassword(result)
  }
  const [passwordLength, setpasswordLength] = useState(12)
  const [includeEnglish, setIncludeEnglish] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState("")
  const number_sequence = [...Array(30)].map((i, index) => index + 10);
  return (

    <div>
      <Card className="w-full ">

        <CardBody className="flex flex-row gap-4 flex-col ">

          <Typography variant='h3' > Amharic Password Generator</Typography>
          <Input size="lg" value={password} readOnly />

          <div className="flex flex-row gap-4 ">
            <div className="my-4 flex flex-row items-center gap-4 min-w-[12px]">


              <Select variant="outlined" onChange={(e) => setpasswordLength(Number(e))} value={"" + passwordLength} label="Select Password Length">
                {number_sequence.map((index) =>
                  <Option value={"" + index} key={index + 1}>{index}</Option>
                )
                }

              </Select>
            </div>

            <Checkbox checked={includeEnglish} onChange={(e) => setIncludeEnglish(!includeEnglish)} id='english-checkbox' label="Include English Alphabet{A-Z}" ripple={true} />
            <Checkbox checked={includeNumbers} onChange={(e) => setIncludeNumbers(!includeNumbers)} id='numbers-checkbox' label="Allow Numbers (0-9)" ripple={true} />
            <Checkbox checked={includeSymbols} onChange={(e) => setIncludeSymbols(!includeSymbols)} id='symbols-checkbox' label="Allow Symbols (!@#$%^&*()+)" ripple={true} />
            <Button className="min-w-[72px]" onClick={() => generateText()}>Button</Button>



          </div>
        
        </CardBody>
        <CardFooter>
          <Button variant="text"><a href='https://github.com/hmhard/amharic-password-generator'>View On Github</a> </Button>
        </CardFooter>
      </Card>
    </div>

  );
}

export default App;
