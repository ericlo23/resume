import React from "react"

import Profile from "../components/Profile"
import Skill from "../components/Skill"

import Layout from "../components/layout"

import { profile, skills, experiences, education } from "../contents"
import Experience from "../components/Experience"

const IndexPage = () => (
  <Layout>
    <Profile {...profile} />
    <Skill skills={skills} />
    <Experience experiences={experiences} />
    <Experience title="Education" experiences={education} />
  </Layout>
)

export default IndexPage
