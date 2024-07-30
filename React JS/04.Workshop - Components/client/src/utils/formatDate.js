export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const dateOptions = {   
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };

    const formattedDate = date.toLocaleDateString('en-US', dateOptions);
    
    return formattedDate;
};


