const dev = {
  API_ENDPOINT: "http://localhost:5000/portal/",
}

const prod = {
  API_ENDPOINT: "https://mdigital.tamweel-aloula.com/portal/",
}

const test = {
  API_ENDPOINT: "https://api-mob-stg.tamweel-aloula.com/portal/",
}

const uat = {
  API_ENDPOINT: "https://api-mob-stg.tamweel-aloula.com/portal/",
}

console.log("process.env.NEXT_PUBLIC_NODE_ENV", process.env.NEXT_PUBLIC_NODE_ENV)
const getEnvironment = () => {
  switch (process.env.NEXT_PUBLIC_NODE_ENV) {
    case "development":
      return dev
    case "production":
      return prod
    case "test":
      return test
    case "uat":
      return uat
    default:
      return uat
  }
}

const env = getEnvironment()

export default env
