"use client"; import React, { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Checkbox,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Badge,
    IconButton,
    Menu,
    MenuItem,
    Box,
    Typography,
    Divider,
    Tooltip,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlaceIcon from '@mui/icons-material/Place';

export default function Component() {
    const [complaintsData, setComplaintsData] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('your_api_endpoint_or_local_json_file.json');
                // const data = await response.json();
                const data = [
                    {
                        "id": 1,
                        "firNumber": "2024/04/101",
                        "location": "Dummy Location 1",
                        "status": "Pending",
                        "address": "123 Fake St. City 1, State CA",
                        "description": "Dummy Complaint Description 1",
                        "reporterName": "John Doe 1",
                        "assignedTo": "Officer Smith"
                    },
                    {
                        "id": 2,
                        "firNumber": "2024/04/102",
                        "location": "Dummy Location 2",
                        "status": "Approved",
                        "address": "123 Fake St. City 2, State NY",
                        "description": "Dummy Complaint Description 2",
                        "reporterName": "John Doe 2",
                        "assignedTo": "Officer Jones"
                    },
                    {
                        "id": 30,
                        "firNumber": "2024/04/129",
                        "location": "Dummy Location 30",
                        "status": "Rejected",
                        "address": "123 Fake St. City 30, State CA",
                        "description": "Dummy Complaint Description 30",
                        "reporterName": "John Doe 30",
                        "assignedTo": "Officer Smith"
                    }
                ]
                setComplaintsData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Card className="bg-[#0000003d] text-white">
            <CardHeader
                title="Complaints"
                subheader={<Typography variant="caption">View and manage complaints</Typography>}
            />
            <CardContent className="p-0 ">
                <Box sx={{ overflowX: 'auto' }}>
                    <Table className="bg-[#0000003d]">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox id="check-all" />
                                </TableCell>
                                <TableCell>FIR Number</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Reporter Name</TableCell>
                                <TableCell>Assigned To</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {complaintsData.map((complaint) => (
                                <TableRow key={complaint.id}> {/* Use a unique identifier for each complaint */}
                                    <TableCell padding="checkbox">
                                        <Checkbox id={`check-${complaint.id}`} />
                                    </TableCell>
                                    <TableCell>{complaint.firNumber}</TableCell>
                                    <TableCell>
                                        <Tooltip title="View map">
                                            <IconButton size="small">
                                                <PlaceIcon fontSize="inherit" />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell>
                                        <Badge color={complaint.status === 'Pending' ? 'primary' : complaint.status === 'Approved' ? 'success' : 'error'}>
                                            {complaint.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{complaint.address}</TableCell>
                                    <TableCell>{complaint.description}</TableCell>
                                    <TableCell>{complaint.reporterName}</TableCell>
                                    <TableCell>{complaint.assignedTo}</TableCell>
                                    <TableCell>
                                        <IconButton size="small" onClick={handleOpenMenu}>
                                            <MoreHorizIcon />
                                        </IconButton>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleCloseMenu}
                                            sx={{ mt: 1 }}
                                        >
                                            <MenuItem>View</MenuItem>
                                            <MenuItem>Assign</MenuItem>
                                            <MenuItem>Approve</MenuItem>
                                            <MenuItem>Reject</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table >
                </Box >
            </CardContent >
        </Card >
    );
}