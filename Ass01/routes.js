module.exports = (req, res) => {
  const {url, method} = req;
  if(url === '/'){
    res.write('<html>')
    res.write('<head><title>Assignment 1</title></head>')
    res.write('<body>')
    res.write('<h1>Hello Assignment</h1>')
    res.write('<form action="/create-user" method="POST"><input name="username" type="text"><button type="submit">send</button></form>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }
  if(url === '/users'){
    res.write('<html>')
    res.write('<head><title>Assignment 1</title></head>')
    res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
    res.write('</html>')
    return res.end()
  }
  if(url === '/create-user' && method === 'POST'){
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    req.on('end', () => {
      const bodyParsed = Buffer.concat(body).toString();
      console.log(bodyParsed.split('=')[1])
      res.statusCode = 302
      res.setHeader('location', '/')
      return res.end()
    })
  }
}