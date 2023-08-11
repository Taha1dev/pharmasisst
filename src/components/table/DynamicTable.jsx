import React, { useState, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import './table.css';

const itemsPerPage = 10;

const TableHeader = ({ sortKey, sortDirection, handleSort }) => (
  <thead>
    <tr className="text-white">
      <th
        className="py-2 px-4 cursor-pointer"
        onClick={() => handleSort('song')}
      >
        Song {sortKey === 'song' && (sortDirection === 'asc' ? '↑' : '↓')}
      </th>
      <th
        className="py-2 px-4 cursor-pointer"
        onClick={() => handleSort('artist')}
      >
        Artist {sortKey === 'artist' && (sortDirection === 'asc' ? '↑' : '↓')}
      </th>
      <th
        className="py-2 px-4 cursor-pointer"
        onClick={() => handleSort('year')}
      >
        Year {sortKey === 'year' && (sortDirection === 'asc' ? '↑' : '↓')}
      </th>
    </tr>
  </thead>
);

const TableRow = ({ song, artist, year }) => (
  <tr className="hover:bg-gray-100 transition-colors duration-200">
    <td className="py-3 px-4">{song}</td>
    <td className="py-3 px-4">{artist}</td>
    <td className="py-3 px-4">{year}</td>
  </tr>
);

const DynamicTable = () => {
  const initialData = [
    { song: 'The Sliding Mr', artist: 'Malcolm Lockyer', year: 1961 },
    { song: 'Witchy Woman', artist: 'The Eagles', year: 1972 },
    { song: 'Shining Star', artist: 'Earth, Wind, and Fire', year: 1975 },
    { song: 'Rhythm of Life', artist: 'Sammy Davis Jr.', year: 1963 },
    { song: 'Bohemian Rhapsody', artist: 'Queen', year: 1975 },
    { song: 'Hotel California', artist: 'Eagles', year: 1976 },
    { song: 'Dancing Queen', artist: 'ABBA', year: 1976 },
    { song: 'Like a Rolling Stone', artist: 'Bob Dylan', year: 1965 },
    { song: 'Imagine', artist: 'John Lennon', year: 1971 },
    { song: 'Born to Run', artist: 'Bruce Springsteen', year: 1975 },
    { song: 'I Will Survive', artist: 'Gloria Gaynor', year: 1978 },
    { song: 'Smells Like Teen Spirit', artist: 'Nirvana', year: 1991 },
    { song: 'Waterloo', artist: 'ABBA', year: 1974 },
    { song: 'Hey Jude', artist: 'The Beatles', year: 1968 },
    { song: 'Stairway to Heaven', artist: 'Led Zeppelin', year: 1971 },
    { song: 'Thriller', artist: 'Michael Jackson', year: 1982 },
    { song: 'Imagine', artist: 'Ariana Grande', year: 2019 },
    { song: 'Shape of You', artist: 'Ed Sheeran', year: 2017 },
    { song: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', year: 2014 },
    { song: 'Hallelujah', artist: 'Leonard Cohen', year: 1984 },
    { song: 'Billie Jean', artist: 'Michael Jackson', year: 1982 },
    { song: 'Rolling in the Deep', artist: 'Adele', year: 2010 },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
    setCurrentPage(1);
  };

  const sortedData = useMemo(() => {
    return sortKey
      ? [...data].sort((a, b) => {
          const compare = a[sortKey].localeCompare(b[sortKey]);
          return sortDirection === 'asc' ? compare : -compare;
        })
      : data;
  }, [data, sortKey, sortDirection]);

  const filteredData = useMemo(() => {
    return searchTerm
      ? sortedData.filter(
          (item) =>
            item.song.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.artist.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : sortedData;
  }, [sortedData, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const offset = (currentPage - 1) * itemsPerPage;
  const visibleData = filteredData.slice(offset, offset + itemsPerPage);

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="bg-gray-100 rounded-t-lg p-2 flex items-center">
          <input
            type="text"
            placeholder="Search by Song or Artist"
            className="px-4 py-2 border w-full"
            value={searchTerm}
            onChange={handleSearch}
          />
          {sortKey && (
            <div
              className="ml-2 cursor-pointer text-gray-600"
              onClick={() => handleSort(sortKey)}
            >
              {sortDirection === 'asc' ? (
                <span>&uarr;</span>
              ) : (
                <span>&darr;</span>
              )}
            </div>
          )}
        </div>
        <table className="w-full bg-white rounded-b-lg overflow-hidden">
          <TableHeader
            sortKey={sortKey}
            sortDirection={sortDirection}
            handleSort={handleSort}
          />
          <tbody>
            {visibleData.map((item, index) => (
              <TableRow key={index} {...item} />
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <ReactPaginate
            pageCount={totalPages}
            onPageChange={(selectedItem) =>
              setCurrentPage(selectedItem.selected + 1)
            }
            forcePage={currentPage - 1}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            containerClassName={'pagination row-style-pagination'}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            previousClassName={'pagination-item previous'}
            nextClassName={'pagination-item next'}
            activeClassName={'active'}
            pageClassName={'pagination-item page'}
            pageLinkClassName={'pagination-link'}
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
