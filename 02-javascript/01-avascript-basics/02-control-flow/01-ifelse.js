let userRole = 'viewer'

const isUserEditor = userRole === 'editor'
const isUserViewer = userRole === 'viewer'

console.log("isUserEditor:", isUserEditor)
console.log("isUserViewer:", isUserViewer)

if (isUserEditor) {
    console.log("You can edit this file")   
} else if (isUserViewer) {
    console.log("You can view this file")
} else {
    console.log("You don't have access")
}