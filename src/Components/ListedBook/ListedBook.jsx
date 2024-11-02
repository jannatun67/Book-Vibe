import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/AddToDb';
import Book from '../Book/Book';

const ListedBook = () => {
    const [readList , setReadList]=useState([])
    const allBooks = useLoaderData();
    useEffect(() =>{
        const storedReadList = getStoredReadList();
        const storeReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book=> storeReadListInt.includes(book.bookId));
        setReadList(readBookList)
    },[])
    return (
        <div>
            <h3 className="text-3xl font-bold my-10 text-center bg-gray-200 p-4 rounded-xl">  Book</h3>
            <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Books I read : {readList.length}</h2>
      {
        readList.map(book=> <Book key={book.bookId} book={book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ListedBook;