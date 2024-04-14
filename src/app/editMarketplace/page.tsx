"use client";
import React, { useState } from 'react';
import Marketplaces from "../../assets/data/marketplace";
import Avatar from '@mui/material/Avatar';
import MarketplaceDialog from "../../components/MarketplaceDialog"

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

  const [marketplaces, setMarketplaces] = useState(Marketplaces);
  const [openDialog, setOpenDialog] = useState(false);
  const [item, setItem] = useState({
    name: " ",
    description: " ",
    imageLink: " ",
    type: " ",
    isGov: false,
    isPaid: false,
    rating: 0.0
  });



  const handleOpenDialog = (itemNameToFind: string) => {
    const foundItem = Marketplaces.find(item => item.name === itemNameToFind);
    foundItem ? setItem(foundItem) : setItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const addItem = (newItem: any) => {
    setMarketplaces([...marketplaces, newItem]);
  };

  const editItem = (name: string, newItemValues: any) => {
    setMarketplaces(marketplaces.map(item => (item.name === name ? { ...item, ...newItemValues } : item)));
  };

  const deleteItem = (name: string) => {
    setMarketplaces(marketplaces.filter(item => item.name !== name));
  };


  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={() => handleOpenDialog(" ")} startIcon={<AddIcon />}>
              Add Item
            </Button>
            <MarketplaceDialog item={item} open={openDialog} onClose={handleCloseDialog} />

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

                {marketplaces.map((item, index) => {
                  return (
                    <TableRow key={index} hover>
                      <TableCell className="font-semibold">
                        <Typography variant="body2">{index + 1}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{item.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{item.description}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          <Avatar alt="Source Image" src={item.imageLink} />
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{item.type}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{item.isGov ? "Yes" : "No"}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{item.isPaid ? "Yes" : "No"}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{item.rating}</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton aria-label="edit" size="small" onClick={() => handleOpenDialog(item.name)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" size="small" onClick={() => deleteItem(item.name)} >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
