self.addEventListener('install', e =>{
    console.log('sw Install')
})

self.addEventListener('activate', e =>{
    console.log('sw Activate')
})

self.addEventListener('fetch', e =>{
    console.log('sw Fetch')
    console.log(e.request)
})