import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getQuestionsList } from 'redux/questionsSlice/selectors/getQuestionsList/getQuestionsList';


const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const questions = useSelector(getQuestionsList);
  const location = useLocation();

  if (questions.length === 0 && location.pathname === '/result') {
    return <Navigate to="/start" replace />;
  }

  return children;

};

export default ProtectedRoute;