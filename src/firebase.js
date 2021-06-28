import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyCj9ll4Bh1HlaE4Woc_C6TYTGJl_yHmLU8",
        authDomain: "sparta-react-fd2d6.firebaseapp.com",
        projectId: "sparta-react-fd2d6",
        storageBucket: "sparta-react-fd2d6.appspot.com",
        messagingSenderId: "27040412159",
        appId: "1:27040412159:web:8ea0172eb2d0b9cc7737ca",
        measurementId: "G-XVL80XR1FY"
}

firebase.initializeApp(firebaseConfig)//firebase에서 앱을 초기화해주는 작업 config설정으로 초기화를 해준다.

const firestore = firebase.firestore()

export { firestore }

// 이 전체의 과정은 firebase에서 가져오는 인스턴스를 firebaseConfig변수에 넣고 가져다 쓰기 위해서 만드는 것