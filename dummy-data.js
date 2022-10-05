const DUMMY_EVENTS = [
    {
      id: 'e1',
      date: '2022-05-10',
      image: 'https://images.unsplash.com/photo-1664073412845-f44940c3c2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      isFeatured: true,
    },
    {
      id: 'e2',
      date: '2022-05-10',
      image: 'https://images.unsplash.com/photo-1664073412845-f44940c3c2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      isFeatured: true,
    },
    {
      id: 'e3',
      date: '2022-05-10',
      image: 'https://images.unsplash.com/photo-1664073412845-f44940c3c2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      isFeatured: true,
    },
    {
      id: 'e4',
      date: '2022-04-10',
      image: 'https://images.unsplash.com/photo-1664257732531-f9498dd3de01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      isFeatured: true,
    },
    {
      id: 'e5',
      date: '2022-05-10',
      image: 'https://images.unsplash.com/photo-1664073412845-f44940c3c2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      isFeatured: true,
    },
    {
      id: 'e6',
      date: '2022-05-10',
      image: 'https://images.unsplash.com/photo-1664073412845-f44940c3c2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }