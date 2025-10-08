import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const MyInstallation = () => {
    const allApps = useLoaderData();
  const { id } = useParams();
    console.log(id);
    return (
        <div>
            
        </div>
    );
};

export default MyInstallation;