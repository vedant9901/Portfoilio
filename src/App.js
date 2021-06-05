import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {firestoreConnection} from './firebase';
import { fetchResumeData, fetchSharedData } from './actions/APIs';


class App extends Component {

  state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
      hasData: false
    };

  componentDidMount() {
    this.loadSharedData(); 
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  loadResumeFromPath = async ()=> {
   
    let response = await fetchResumeData(firestoreConnection)
    setTimeout(()=>{
      this.setState({ resumeData: response });
    },1000)
  }

  loadSharedData = async() =>{
    let response = await fetchSharedData(firestoreConnection)
    setTimeout(()=>{
      this.setState({ sharedData: response, hasData: true });
      if(this.state.hasData){
        this.loadResumeFromPath()
        this.applyPickedLanguage(
          window.$primaryLanguage,
          window.$secondaryLanguageIconId
        );
      }
    },1000)
    // this.loadResumeFromPath()
  }

  render() {
    let hasData = this.state.hasData
    return (
      <div>
      {hasData ? (
        <div>
          <Header sharedData={this.state.sharedData['basic_info']} />
          
          <About
            resumeBasicInfo={this.state.resumeData.basic_info}
            sharedBasicInfo={this.state.sharedData.basic_info}
          />
          {/* <Projects
            resumeProjects={this.state.resumeData.projects}
            resumeBasicInfo={this.state.resumeData.basic_info}
          /> */}
          <Skills
            sharedSkills={this.state.sharedData.skills}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Experience
            resumeExperience={this.state.resumeData.experience}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </div>
      ) : (<div className="water">hello</div className="water">)}
      </div>
      // <div>
       
      // </div>
    );
  }
}

export default App;
