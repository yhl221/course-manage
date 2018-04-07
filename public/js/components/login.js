import React, {Component} from "react";

class Login extends Component {

    render() {
        return <div className="login-container">
            <div className="logo">
                西安邮电大学
            </div>
            <div className="login-putin" classID="isLogin">
                <div className="tabs">
                    <ul classID="selectTab">
                        <li className="tab_style">
                            <span classID="login">登录</span>
                        </li>
                        <li className="tab_style">
                            <span classID="register">注册</span>
                        </li>
                    </ul>
                </div>
                <div className="tab-body">
                    <div className="input-container">
                        <input type="text" id="username" className="input-style " placeholder="用户名"/>
                    </div>
                    <div className="input-container">
                        <input type="password" id="password" placeholder="密码" className="input-style"/>
                    </div>
                    <form className="identity">
                        <input type="radio" value="学生" name="identity"/><span className="radio-position">学生</span>
                        <input type="radio" value="教师" name="identity"/><span className="radio-position">教师</span>
                    </form>
                    <input type="submit" value="登录" className="submit-button"/>
                </div>
            </div>
        </div>
    }
}

export default Login;