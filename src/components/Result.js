import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Result.css';

const Result = ({ result }) => (
  <Card className="result-box">
    <CardContent>
      <Typography variant="h6">{result.disease}</Typography>
      <Typography variant="body2">{result.description}</Typography>
    </CardContent>
  </Card>
);

export default Result;
