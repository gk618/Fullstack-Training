const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/tokens', (req, res) => {
  res.json({
    colors: {
      brand: '#7c3aed',
      background: '#f5f5f5',
      surface: '#ffffff',
      textPrimary: '#1a1a1a',
      textSecondary: '#666666',
      border: '#e0e0e0'
    },
    spacing: {
      sm: '8px',
      md: '16px',
      lg: '32px',
      xl: '64px'
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
      sizeBase: '14px',
      sizeLg: '20px',
      sizeXl: '32px'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});