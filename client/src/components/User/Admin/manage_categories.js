import React from 'react';
import UserLayout from '../../../hoc/user';
import ManagePublishers from './manage_publishers';
import ManageAuthors from './manage_authors';

const ManageCategories = () => {
    return (
        <UserLayout>
            <ManagePublishers/>
            <ManageAuthors/>
        </UserLayout>
    );
};

export default ManageCategories;