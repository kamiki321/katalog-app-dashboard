import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import AplikasiCard from '../card/AplikasiCard';
import Software from '../card/Software';


// const cardData = [
//   {
//     title: 'Card 1',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus massa eget metus cursus dignissim. Proin posuere blandit lorem, eu vehicula libero aliquam in. Suspendisse id mi congue, tristique ipsum sed, aliquam mi. Phasellus ullamcorper pellentesque mi, non sodales ante.',
//     imageUrl: 'https://example.com/image1.jpg',
//   },
//   {
//     title: 'Card 1',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus massa eget metus cursus dignissim. Proin posuere blandit lorem, eu vehicula libero aliquam in. Suspendisse id mi congue, tristique ipsum sed, aliquam mi. Phasellus ullamcorper pellentesque mi, non sodales ante.',
//     imageUrl: 'https://example.com/image1.jpg',
//   },
//   {
//     title: 'Card 1',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus massa eget metus cursus dignissim. Proin posuere blandit lorem, eu vehicula libero aliquam in. Suspendisse id mi congue, tristique ipsum sed, aliquam mi. Phasellus ullamcorper pellentesque mi, non sodales ante.',
//     imageUrl: 'https://example.com/image1.jpg',
//   },
//   // Add more card data as needed
// ];



const CardGrid = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        // Define the API URL you want to fetch data from
        const apiUrl = 'https://api.mockfly.dev/mocks/4150728a-8878-4427-8725-3a92fa972967/aplikasi/pusdatin'; // Replace with your API URL

        // Fetch data from the API
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Set the fetched data in the state
            setCardData(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={5} md={3} key={index}>
          <AplikasiCard 
            imageUrl={card.imageUrl}
            title={card.title}
            content={card.content}
             />
        </Grid>
      ))}
    </Grid>
  );
};




export default CardGrid;
