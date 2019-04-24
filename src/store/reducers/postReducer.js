const initState = {
  posts: [
    {id: '1', title: 'help me find user1', content: 'blah blah blah'},
    {id: '2', title: 'help me find user2', content: 'blah blah blah'},
    {id: '3', title: 'help me find user3', content: 'blah blah blah'}
  ]
}

const postReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_POST':
      console.log('post created', action.post);
      return state;
    case 'CREATE_POST_ERROR':
      console.log('create post error', action.err );
      return state;
    default: 
    return state;
  }
}

export default postReducer;