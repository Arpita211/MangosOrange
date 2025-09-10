import React, { useState } from 'react';
import style from "./Search.module.css";
import { LucideChevronsLeftRightEllipsis, MoveLeftIcon, Search } from 'lucide-react';
import PopularSearches from './Popular';



const SearchPage = () => {
  const [searchText, setSearchText] = useState('');

  // Sample memory data
  const memories = [
    {
      id: 1,
      title: "DJ Night 2024",
      description: "Amazing music and dancing all night!",
      author: "Rahul",
      date: "15 March 2024"
    },
    {
      id: 2,
      title: "Dance Performance",
      description: "Classical dance group performed beautifully",
      author: "Priya",
      date: "14 March 2024"
    },
    {
      id: 3,
      title: "Tech Quiz Winners",
      description: "Our team won the tech quiz competition",
      author: "Amit",
      date: "13 March 2024"
    },
    {
      id: 4,
      title: "Food Festival",
      description: "Delicious food from different stalls",
      author: "Sneha",
      date: "12 March 2024"
    },

    {
        id:5,
        title: " Tech Fest",
        description: "Heckathon held for  tech-talent hunt",
        author : "Arpita",
        date: "31 August 2025"
    }
  ];

  // Filter memories based on search
  const filteredMemories = memories.filter(memory =>
    memory.title.toLowerCase().includes(searchText.toLowerCase()) ||
    memory.description.toLowerCase().includes(searchText.toLowerCase()) ||
    memory.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
    <div className={style.hero} style={{ padding: '20px', fontFamily: 'Fredoka'}}>
      {/* Header */}
      <div   style={{ textAlign: 'center', marginBottom: '30px' }}>
        
       <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center mb-6 leading-tight"><br></br>
  <span className="block text-white">Highlighting The Vibes </span>
  <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 
             bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 
             bg-clip-text text-transparent animate-gradient">
    That Last Forever
  </span>
  </h1>
  
   <p className="max-w-2xl mx-auto text-xl text-white font-normal italic mb-6">From the silly to the special, every memory deserves a little drama—and the spotlight is where we give it that retro shine</p>

  



       
      </div>
      <div className='flex justify-center  text-2xl md:text-3xl lg:text-4xl text-white mb-8 font-bold '>
        <h1>Popular Searches</h1>
        <PopularSearches/>
        
      </div>

      {/* Search Box */}
      <div style={{ marginBottom: '30px', textAlign: 'center',  alignItems: 'center'}}>
       
        <input
       
          type="text"
          placeholder="Search memories..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className=' shadow-lg'
          style={{
            width: '400px',
            maxWidth: '90%',
            padding: '12px 16px',
            fontSize: '16px',
            border: '2px solid #ddd',
            backgroundColor:'whitesmoke',
          
            borderRadius: '8px',
            outline: 'none'
          }}
        />
      </div>

      {/* Results Count */}
      <p className ="text-2xl"  style={{ color: '#fffefeff', marginBottom: '20px'  }}>
        Found {filteredMemories.length} memories
      </p>

      {/* Memory Cards */}
      <div  style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        {filteredMemories.map((memory) => (
          <div 
          className="bg-white/70 backdrop-blur-md


             rounded-2xl shadow-lg shadow-pink-200/40
 hover:shadow-5xl 
             transform hover:scale-105 hover:rotate-1 transition-all duration-200 p-5 
             border border-pink-200/90 hover:border-pink-400/100"
            key={memory.id}
            style={{boxShadow : '0 4px 15px hsl(25 15% 15% / 0.15), 0 2px 8px hsl(25 15% 15% / 0.1)'}}
           
          >
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '10px'

            }}>
              {memory.title}
            </h3>
            
            <p style={{
              color: '#666',
              fontSize: '14px',
              lineHeight: '1.5',
              marginBottom: '15px'
            }}>
              {memory.description}
            </p>
            
            <div style={{
              borderTop: '1px solid #eee',
              paddingTop: '15px',
              fontSize: '12px',
              color: '#888'
            }}>
              <div>
              <div style={{ marginBottom: '5px'  }}>
                <strong>By:</strong> {memory.author}
              </div>
              <div>
                <strong>Date:</strong> {memory.date}
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredMemories.length === 0 && searchText && (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>
            No memories found for "{searchText}"
          </p>
          <p style={{ fontSize: '14px', color: '#888' }}>
            Try searching for something else
          </p>
        </div>
      )}
      
    </div>
   
    
    </div>
   
  );
};

export default SearchPage;