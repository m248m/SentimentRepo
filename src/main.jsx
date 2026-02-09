import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// ★追加1: Amplifyライブラリの読み込み
import { Amplify } from 'aws-amplify';

// ★追加2: Cognitoの設定
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'ap-northeast-1_gRJQ6gpSb', // ここを書き換える
      userPoolClientId: '2nft4ghqsg26vgojl8jd92vo8o',    // ここを書き換える
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
