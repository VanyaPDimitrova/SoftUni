export const formatDate = (dateString, hasWeekday = false) => {
    const date = new Date(dateString);

    const options = {   
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };

    const dateOptions = hasWeekday ? { weekday: 'long', ...options  } : options;

    const formattedDate = date.toLocaleDateString('en-US', dateOptions);
    
    return formattedDate;
};


