function Write() {
  return (
    <>
      <h4 className="container mt-4"><strong>글 작성페이지12</strong></h4>

      <div className="container mt-3">
        <form action="/add2" method="POST">
          <div className="form-group">
            <label>오늘의 할일</label>
            <input type="text" className="form-control" name="title" />
          </div>
          <div className="form-group">
            <label>날짜</label>
            <input type="text" className="form-control" name="date" />
          </div>
          <button type="submit" className="btn btn-outline-secondary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Write;