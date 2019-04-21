import axios from 'axios'
export const getJobs = async function () {
  let response
  try {
    response = await axios.get('https://api.ziprecruiter.com/jobs/v1?search=junior software marketing engineer developer database support architect junior data analyst science design UX enterprise hardware technical &location=New York, NY&radius_miles=80&days_ago=10&jobs_per_page=100&page=1&api_key=qfbg3uitqk8q2zb4jd2vwhwze469g35z')
  } catch (error) {
    console.log('error getting api', error)
  }
  return response
}
export const postJobs = async function (formData) {
  // This removes extra fields that we don't want to be posted to our backend http://perfectionkills.com/understanding-delete/
  delete formData.emptyField
  delete formData.postedSuccessfully
  delete formData.isPosted
  try {
    await axios.post('https://server.objectivetalent.com/jobs/post', { ...formData })
    return true
  } catch (error) {
    return false
  }
}
