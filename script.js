document.getElementById('subscribeBtn').addEventListener('click', function() {
    document.getElementById('subscriptionForm').classList.remove('hidden');
});

document.getElementById('subscriptionFormDetails').addEventListener('submit', function(event) {
    event.preventDefault(); // ��� ����� ����� ������

    // ������ ��� �������� �������
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const receipt = document.getElementById('receipt').files[0];

    // ���� �� ��� ���� �����
    if (receipt) {
        // �� ��� ������� ����� ����� ����� ������� ������ �� ����� �������� ��� ������
        document.getElementById('subscriptionForm').classList.add('hidden');
        document.getElementById('confirmationMessage').classList.remove('hidden');
    } else {
        alert('���� ��� ���� �����.');
    }
});
