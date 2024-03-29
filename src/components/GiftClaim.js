import React from "react";

function GiftClaim () {
    return (
        <div class="justify-center flex py-2 sm:py-3">
            <table class="table table-bordered border-primary">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Receiver Address</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Claim Gift</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>aaa</td>
                    <td>Otto</td>
                    <td><button type="button" class="btn btn-secondary">Claim</button></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td><button type="button" class="btn btn-secondary">Claim</button></td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
}

export default GiftClaim;