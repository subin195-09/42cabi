

export default function LentModal(){


  const handleClick = () => {
    alert("대여완료?!")
    // 사실, 여기 함수를 이용하여 대여완료 시, 대여성공 한번 띄워주고는
    // 바로 return 페이지로 날려주고 싶스므니다. 더 찾아보겟스므니다.
}

    return (
        <div className="modal" id="lentmodal" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">선택한 사물함을 대여합니다.</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p>사물함을 대여하시겠습니까?</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                  <button type="button" className="btn btn-primary" onClick={handleClick}>대여</button>
                </div>
              </div>
            </div>
        </div>

    )
}

