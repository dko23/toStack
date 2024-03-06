import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Flex, Heading, Text, Avatar, Box} from '@chakra-ui/react';


function Users() {
    const [response, setResponse] = useState([]);

    const handleSubmit = async () => {
        try {
            const promise = await axios.get(`https://bsg-api.onrender.com/api/users`);
            console.log(promise.data.data);
            setResponse(promise.data.data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Users</h1>
            <button onClick={handleSubmit}>Click here</button>


            {response.map((user, index) => (
<Card maxW='md' key={index}>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

        <Box>
          <Heading size='sm'>Segun Adebayo</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
      </Flex>

    </Flex>
  </CardHeader>
  <CardBody>
  <p>{user.email}</p>
<p>{user.timestamp}</p>
  </CardBody>
  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
  </CardFooter>
    </Card>
))}
            <div>  
            </div>
        </div>
    );
}

export default Users;


