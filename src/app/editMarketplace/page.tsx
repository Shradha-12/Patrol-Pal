
import * as React from 'react';
import {
  Card,
  CardContent,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Grid,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import DeleteIcon from '@mui/icons-material/Delete';

export default function Component() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={undefined} startIcon={<AddIcon />}>
              Add Item
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="w-12">
                    <Typography variant="body2" noWrap>
                      ID
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" noWrap>
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" noWrap>
                      Description
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" noWrap>
                      Image
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" noWrap>
                      Type
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" noWrap>
                      Is Gov
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" noWrap>
                      Is Paid
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" noWrap>
                      Rating
                    </Typography>
                  </TableCell>
                  <TableCell className="w-36 text-center">
                    <Typography variant="body2" noWrap>
                      Actions
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell className="font-semibold">
                    <Typography variant="body2">{1}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">Apple</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">Fruit</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">apple.jpg</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">Fruit</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">No</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">No</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">4.5</Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="edit" size="small">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                {/* ... other table rows */}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
