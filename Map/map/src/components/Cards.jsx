import React from 'react';

const items = [
  {
    name: 'item1',
    img: 'https://imgs.search.brave.com/EP_6dT2tIlMZGobCkKrtnm-2vl0ErC1kwMwtSM-9g9Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1l/dS1jZW50cmFsLTEu/YW1hem9uYXdzLmNv/bS9jYXJ0b29ucy1z/My9zdHlsZXMvcHJv/ZHVjdF9kZXRhaWxf/aW1hZ2UvczMvY2hh/cmdlMjAyNDA3MjJC/LmpwZz9pdG9rPU1x/U25oa2xa'
  },
  {
    name: 'item2',
    img: 'https://imgs.search.brave.com/4EulwWFFLWXAXg4BmnWDZHrtVSLRBpKK3asejo7LnWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1l/dS1jZW50cmFsLTEu/YW1hem9uYXdzLmNv/bS9jYXJ0b29ucy1z/My9zdHlsZXMvcHJv/ZHVjdF9kZXRhaWxf/aW1hZ2UvczMvMzM4/My0yNDA3MDUlMjBT/dW5hayUyMChTY2hv/cGYpX1JHQi5qcGc_/aXRvaz1zNktYNDZU/SA'
  },
  {
    name: 'item3',
    img: 'https://imgs.search.brave.com/mgxEK0mFe_8dDBiAl8p-Sl2XwvjBpu8YzEWCI8Ct_nM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYXJpZWwtcGlj/dHVyZXMtYXB5MG9y/NG4wY25va2xpYS5q/cGc'
  }
];

const Cards = () => {
  return (
    <div>
      <h1>Cards</h1>
      <div className='container' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {items.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '200px', textAlign: 'center' }}>
            <img src={item.img} alt={item.name} style={{ width: '100%', height: 'auto' }} />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
