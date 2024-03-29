from scapy.all import *

def network_scan(target_ip, timeout=2):
    # Buat paket ICMP Echo Request
    icmp_request = IP(dst=target_ip) / ICMP()

    # Kirim paket dan terima respon
    ans, _ = sr(icmp_request, timeout=timeout, verbose=False)

    # Proses hasil respon
    live_hosts = []
    for sent_packet, received_packet in ans:
        live_hosts.append(received_packet[IP].src)

    return live_hosts

# Contoh penggunaan
target_network = "192.168.1.0/24"
live_hosts = network_scan(target_network)
print("Host yang hidup di dalam jaringan:", live_hosts)