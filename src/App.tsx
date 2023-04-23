import React, { useState } from 'react';
import {
  Button, Card, CardBody, CardFooter, Checkbox, Input, Option, Select, Typography, Popover,
  PopoverHandler,
  PopoverContent,
} from '@material-tailwind/react';
import {
  ArrowLongRightIcon,
  ArrowPathIcon,
  ClipboardIcon,

} from "@heroicons/react/24/outline"
import { AMHARIC_LETTERS, ENGLISH_LETTERS, NUMBERS, SYMBOLS } from './shared/constants';
import copy from 'copy-to-clipboard';


function App() {

  const [passwordLength, setpasswordLength] = useState(12)
  const [includeEnglish, setIncludeEnglish] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [openPopover, setOpenPopover] = useState(false)
  const [_,setCopied] = useState(false)
  const [password, setPassword] = useState("")
  const number_sequence = [...Array(30)].map((i, index) => index + 10);
  const generateText = () => {
    let result = '';
    const alphabet = includeEnglish ? ENGLISH_LETTERS : '';
    const numbersToShow = includeNumbers ? NUMBERS : '';
    const symbolsToShow = includeSymbols ? SYMBOLS : '';
    let characters = AMHARIC_LETTERS + alphabet + numbersToShow + symbolsToShow;
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < passwordLength) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    setPassword(result)
  };

  const handleCopy = () => {
    if(!password)
    return;
    setOpenPopover(true);
    copy(password);
    setCopied(true);
    setTimeout(() => {
      setOpenPopover(false);
    }, 2000);
  };


  return (

    <div>
      <Card className="w-full gap-4 max-w-[100rem] ">

        <CardBody className="flex flex-row gap-4 flex-col ">

          <Typography variant='h3' >የአማርኛ የይለፍ ቃል አመንጪ</Typography>
          <Typography variant='h3' > Amharic Password Generator</Typography>
          <div className="relative flex w-full   mr-5">

            <Input size="lg" value={password} onClick={handleCopy} readOnly />
            <Popover open={openPopover} handler={handleCopy}>
              <PopoverHandler >
                <Button color="blue" onClick={handleCopy} >
                  <ClipboardIcon strokeWidth={2} className=" w-5" />

                </Button>
              </PopoverHandler>
              <PopoverContent>
                Copied Successfully
              </PopoverContent>
            </Popover>

          </div>

          <div className="flex flex-row gap-4 ">
            <div className="my-4 flex flex-row items-center gap-4 min-w-[12px]">


              <Select variant="outlined" onChange={(e) => setpasswordLength(Number(e))} value={"" + passwordLength} label="Select Password Length">
                {number_sequence.map((index) =>
                  <Option value={"" + index} key={index + 1}>{index}</Option>
                )}
              </Select>
            </div>

            <Checkbox checked={includeEnglish} onChange={(e) => setIncludeEnglish(!includeEnglish)} id='english-checkbox' label="Include English Alphabet{A-Z}" ripple={true} />
            <Checkbox checked={includeNumbers} onChange={(e) => setIncludeNumbers(!includeNumbers)} id='numbers-checkbox' label="Allow Numbers (0-9)" ripple={true} />
            <Checkbox checked={includeSymbols} onChange={(e) => setIncludeSymbols(!includeSymbols)} id='symbols-checkbox' label="Allow Symbols (!@#$%^&*()+)" ripple={true} />
            <Button className=" flex items-center gap-3 p-1 px-3 " size="sm" onClick={() => generateText()}>አመንጭ/Generate
              <ArrowPathIcon strokeWidth={2} className=" w-5" />
            </Button>
          </div>
        </CardBody>
        <CardFooter>
          <Button className='flex items-center gap-3' variant="text"><a href='https://github.com/hmhard/amharic-password-generator'>View On Github</a> <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" /> </Button>
        </CardFooter>
      </Card>
    </div>

  );
}

export default App;
