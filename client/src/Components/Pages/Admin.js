import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BLOGPOST } from '../../utils/mutations';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { ME } from '../../utils/queries';
import Auth from '../../utils/auth';
const Admin = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/admiralchap';
  const [blogpostinfo, setblogpostinfo] = useState({
    title: 'Title',
    contents: 'Contents',
  });
  const [addBlogPost, { error, data, loading }] = useMutation(ADD_BLOGPOST, {
    refetchQueries: [
      { query: ME }, // DocumentNode object parsed with gql
      'ME', // Query name
    ],
  });
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  const onChange = (e) =>
    setblogpostinfo({ ...blogpostinfo, [e.target.name]: e.target.value });

  const creation = async () => {
    const { title, contents } = blogpostinfo;
    console.log(blogpostinfo);
    console.log(title, contents);
    const { data } = await addBlogPost({
      variables: {
        title,
        contents,
      },
    });
    navigate(from, { replace: true });
  };
  return (
    <div className="base">
      <h1>Welcome Admin!</h1>
      <h1>Add a post!</h1>
      <h2>{blogpostinfo.title}</h2>
      <h2>{blogpostinfo.contents}</h2>
      <div className="characterCreation">
        <input
          onChange={onChange}
          type="text"
          name="title"
          value={blogpostinfo.title}
        />
        <input
          onChange={onChange}
          type="text"
          name="contents"
          value={blogpostinfo.contents}
        />

        <button type="submit" onClick={creation} className="btn">
          Create Blog Post
        </button>

        <button onClick={() => Auth.logout()}>
          <h6>Logout</h6>
        </button>
      </div>
    </div>
  );
};

export default Admin;
