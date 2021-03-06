import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Chipdata=()=>{
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    
      return (
        <Stack direction="row" spacing={1}>
          <Chip label="Deletable" onDelete={handleDelete} />
        </Stack>
      );
}

export default Chipdata;