import React, { useState, useRef, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import styles from './style.module.css';


const Sidebars = () => {
    const [showOptions, setShowOptions] = useState(false);
    const optionsRef = useRef(null);
    const fileInputRef = useRef(null);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        if (showOptions) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showOptions]);

    const handleFileSelected = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            fetch('http://localhost:3001/api/documents/upload', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Server response:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            console.log('Selected file :', selectedFile);
        }
    }

    const openFileExplorer = () => {
        fileInputRef.current.click();
    }

    console.log(handleFileSelected);
    console.log(openFileExplorer);

    return (
        <Box className={styles.sidebar}>
            <Box className={styles.sidebarHeader}>
                <Button
                    className={styles.newButton}
                    variant="contained"

                    size="large"
                    onClick={toggleOptions}>

                    <span className={styles.plusIcon}>+</span> New
                </Button>
                {showOptions && (
                    <Box className={styles.showOptionsContainer} ref={optionsRef}>
                        <Box className={styles.option}>New Folder</Box>
                        <Button className={styles.option} onClick={openFileExplorer}>
                            Upload File
                        </Button>
                        <input
                            type="file"
                            style={{
                                position: 'absolute',
                                left: '-9999px', // Position it off-screen
                            }}
                            ref={fileInputRef}
                            onChange={handleFileSelected}
                        />
                        <Box className={styles.option}>Folder Upload</Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Sidebars;
