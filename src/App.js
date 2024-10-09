import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  headerData = {name: 'Zh Rimel', title: 'Data Scientist', email: 'abc@gmail.com', website: 'abc.github.io/abc', mobile: '01234567890'}
  descData = {desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
  workExperienceData = {title1: 'Job Title at Company (August 2022 – December 2023)', title2: 'Job Title 2 at Company 2 (August 2020 – December 2021)'}
  skillsData = {skill: 'A Key skill'}
  educationData = {school: 'New Jersey Institute of Technology', bachelors: 'BS in Computer Science', bachelors_years: '2018-2022', bachelors_gpa: 'GPA: 3.9',
    masters: 'MS in Data Science', masters_years: '2022 - 2023', masters_gpa: 'GPA: 4.0'
  }

  render() {
    return (
      <div>
        <Header name={this.headerData.name} title={this.headerData.title} email={this.headerData.email} website={this.headerData.website} mobile={this.headerData.mobile}></Header>
        <hr className='orangeLine'></hr>

        <PersonalProfile desc={this.descData.desc}></PersonalProfile>
        <hr className='sectionLine'></hr>

        <WorkExperience title1={this.workExperienceData.title1} title2={this.workExperienceData.title2} desc={this.descData.desc}></WorkExperience>
        <hr className='sectionLine'></hr>

        <Skills skill={this.skillsData.skill}></Skills>
        <hr className='sectionLine'></hr>

        <Education school={this.educationData.school} bachelors={this.educationData.bachelors} bachelors_years={this.educationData.bachelors_years}
        bachelors_gpa={this.educationData.bachelors_gpa} masters={this.educationData.masters} masters_years={this.educationData.masters_years}
        masters_gpa={this.educationData.masters_gpa}></Education>
      </div>
    )
  }
}

export default App;