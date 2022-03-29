import { FlatList, Text,View } from 'react-native';
import {useState,useEffect} from 'react'

import PostListItem from './app/components/PostListItem';
import Seperator from './app/components/Seperator';
import Slider from './app/components/Slider';
import { getFeaturedPosts } from './app/api/post';


const data = [
  {
    id:'123',
    thumbnail:'https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    title: 'Beautiful Women spending time in Nature',
    author:"Admin",
    createdAt: Date.now()
  },
  {
    id:'1234',
    thumbnail:'https://images.unsplash.com/photo-1648138754675-b9918364e325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Beautiful Man spending time in Nature',
    author:"Admin",
    createdAt: Date.now()
  },
  {
    id:'12345',
    thumbnail:'https://images.unsplash.com/photo-1648330197078-c6742e61d227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    title: 'Beautiful Waterfall ',
    author:"Admin",
    createdAt: Date.now()
  },
  {
    id:'123456',
    thumbnail:'https://images.unsplash.com/photo-1648298769847-8e70caf48b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Something written in Chinese language ',
    author:"Admin",
    createdAt: Date.now()
  },
  


];




export default function App() {

  const [featuredPosts,setFeaturedPosts] = useState([]);
  const [latestPosts,setLatestPosts] = useState([])


  
  

  const fetchFeaturedPosts = async () => {
    const {error,posts} = await getFeaturedPosts()
    if(error) return console.log(error)

    // console.log(posts)
    // console.log(setFeaturedPosts(posts))
    setFeaturedPosts(posts)
  }

  useEffect(()=>{
    console.log(fetchFeaturedPosts())
  },[]);


 
  
const ListHeaderComponent = () => {
  return (
    <View>
      {console.log(featuredPosts) ? (<Slider  data={console.log(featuredPosts)} title='Featured Posts'/>) :null}
      {/* <Slider data = {data} title='Featured Posts'/> */}
      <View style={{marginTop:15}}>
      <Seperator/>
      <Text style={{fontWeight:'700', color:'#383838', fontSize:22, marginTop:15}}>Latest Posts</Text>
      </View>
    </View>
  );
}

  return (
    <FlatList
      data = {console.log(featuredPosts)}
      
      keyExtractor = {(item) => item.id}
      contentContainerStyle={{paddingHorizontal:10}}
      ListHeaderComponent = {ListHeaderComponent}
      ItemSeparatorComponent={()=> <Seperator width='90%' style={{marginTop:15}} />}
      renderItem={({item}) => {
        return <View style={{marginTop:15}}>
          <PostListItem post={item}/>
        </View>
      }}
    />
  );
}


