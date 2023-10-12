import React, { useEffect, useState } from 'react';
import { Grid, Select, Divider, MenuItem } from '@mui/material';
import AplikasiCard from '../card/AplikasiCard';

const FilteringAplikasi = () => {
  const [cardData, setCardData] = useState([]);
  const [penggunaAplikasiFilter, setPenggunaAplikasiFilter] = useState('all');
  const [pemilikAplikasiFilter, setPemilikAplikasiFilter] = useState('all');
  const [jenisAplikasiFilter, setJenisAplikasiFilter] = useState('all');

  useEffect(() => {
    // Define the API URL you want to fetch data from
    const apiUrl = 'https://api.mockfly.dev/mocks/4150728a-8878-4427-8725-3a92fa972967/aplikasi'; // Replace with your API URL

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

  // Get unique pemilik aplikasi and jenis aplikasi values from the fetched data
  const uniquePenggunaAplikasi = [...new Set(cardData.map((card) => card.pengguna_aplikasi))];
  const uniquePemilikAplikasi = [...new Set(cardData.map((card) => card.pemilik_aplikasi))];
  const uniqueJenisAplikasi = [...new Set(cardData.map((card) => card.jenis_aplikasi))];

  // Filtering function
  const filterCards = () => {
    return cardData.filter((card) => {
      // Apply filters based on selected criteria
      const penggunaAplikasiMatch = penggunaAplikasiFilter === 'all' || card.pengguna_aplikasi === penggunaAplikasiFilter;
      const pemilikAplikasiMatch = pemilikAplikasiFilter === 'all' || card.pemilik_aplikasi === pemilikAplikasiFilter;
      const jenisAplikasiMatch = jenisAplikasiFilter === 'all' || card.jenis_aplikasi === jenisAplikasiFilter;

      return penggunaAplikasiMatch && pemilikAplikasiMatch && jenisAplikasiMatch;
    });
  };

  return (
    <div>
      {/* <Divider sx={styles.divider} /> */}

      <Select
        value={penggunaAplikasiFilter}
        onChange={(e) => setPenggunaAplikasiFilter(e.target.value)}
        style={{ padding: '10px', margin: '10px' }}
      >
        <MenuItem value="all">Semua Pengguna Aplikasi</MenuItem>
        {uniquePenggunaAplikasi.map((penggunaAplikasi) => (
          <MenuItem key={penggunaAplikasi} value={penggunaAplikasi}>
            {penggunaAplikasi}
          </MenuItem>
        ))}
      </Select>

      <Select
        value={pemilikAplikasiFilter}
        onChange={(e) => setPemilikAplikasiFilter(e.target.value)}
        style={{ padding: '10px', margin: '10px' }}
      >
        <MenuItem value="all">Semua Pemilik Aplikasi</MenuItem>
        {uniquePemilikAplikasi.map((pemilikAplikasi) => (
          <MenuItem key={pemilikAplikasi} value={pemilikAplikasi}>
            {pemilikAplikasi}
          </MenuItem>
        ))}
      </Select>

      <Select
        value={jenisAplikasiFilter}
        onChange={(e) => setJenisAplikasiFilter(e.target.value)}
        style={{ padding: '10px', margin: '10px' }}
      >
        <MenuItem value="all">Semua Jenis Aplikasi</MenuItem>
        {uniqueJenisAplikasi.map((jenisAplikasi) => (
          <MenuItem key={jenisAplikasi} value={jenisAplikasi}>
            {jenisAplikasi}
          </MenuItem>
        ))}
      </Select>

      <Grid container spacing={2}>
        {filterCards().map((card, index) => (
          <Grid item xs={12} sm={5} md={3} key={index}>
            <AplikasiCard
              imageUrl={card.imageUrl}
              title={card.title}
              content={card.content}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FilteringAplikasi;

const styles = {
  divider: {
    my: 4,
  },
};
