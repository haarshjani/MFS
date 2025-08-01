import { Platform } from 'react-native';

const useNavigate = Platform.OS === 'web'
  ? require('react-router-dom').useNavigate
  : require('react-router-native').useNavigate;

const useParams = Platform.OS === 'web'
  ? require('react-router-dom').useParams
  : require('react-router-native').useParams;

  export  {useNavigate, useParams}