import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './MedicineList.css';

const MedicineList = ({ medicines }) => (
  <div className="medicine-list">
    {medicines.map((medicine, index) => (
      <Card key={index} className="medicine-card">
        <CardContent>
          <Typography variant="h6">{medicine.name}</Typography>
          <Typography variant="body2">Dosage: {medicine.dosage}</Typography>
          <Typography variant="body2">Duration: {medicine.duration}</Typography>
          <Typography variant="body2">Time: {medicine.time}</Typography>
          <Typography variant="body2">Use: {medicine.use}</Typography>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default MedicineList;
