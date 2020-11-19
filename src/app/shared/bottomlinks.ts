import { bottomLink } from './bottomlink';
import { SIDENAVS } from './sidenavs';

interface bottomlinks {
    [key: string]: bottomLink;
}

export const BOTTOMLINKS: bottomlinks = {
    "home": {
        "left": {
            "url": [],
            "fragment": "",
            "text": "",
        },
        "center": {
            "url": ["../"],
            "fragment": "",
            "text": "Fahadh's Documentation",
        },
        "right": SIDENAVS[1]
    },
    "pendahuluan": {
        "left": SIDENAVS[0],
        "center": SIDENAVS[0],
        "right": SIDENAVS[2]
    },
    "apa-itu-kubernetes": {
        "left": SIDENAVS[1],
        "center": SIDENAVS[0],
        "right": SIDENAVS[3]
    },
    "menyiapkan-kubernetes": {
        "left": SIDENAVS[2],
        "center": SIDENAVS[0],
        "right": SIDENAVS[4]
    },
    "memasang-kubernetes": {
        "left": SIDENAVS[3],
        "center": SIDENAVS[0],
        "right": SIDENAVS[5]
    },
    "membuat-cluster": {
        "left": SIDENAVS[4],
        "center": SIDENAVS[0],
        "right": SIDENAVS[6]
    },
    "menggunakan-berkas-config-kubernetes": {
        "left": SIDENAVS[5],
        "center": SIDENAVS[0],
        "right": SIDENAVS[7]
    },
    "mendaftarkan-private-docker-registry": {
        "left": SIDENAVS[6],
        "center": SIDENAVS[0],
        "right": SIDENAVS[8]
    },
    "menghapus-node-dari-cluster": {
        "left": SIDENAVS[7],
        "center": SIDENAVS[0],
        "right": SIDENAVS[9]
    },
    "memasang-lens-tidak-wajib": {
        "left": SIDENAVS[8],
        "center": SIDENAVS[0],
        "right": SIDENAVS[10]
    },
    "dasar-kubernetes": {
        "left": SIDENAVS[9],
        "center": SIDENAVS[0],
        "right": SIDENAVS[11]
    },
    "node": {
        "left": SIDENAVS[10],
        "center": SIDENAVS[0],
        "right": SIDENAVS[12]
    },
    "namespace": {
        "left": SIDENAVS[11],
        "center": SIDENAVS[0],
        "right": SIDENAVS[13]
    },
    "pod": {
        "left": SIDENAVS[12],
        "center": SIDENAVS[0],
        "right": SIDENAVS[14]
    },
    "pods-controller": {
        "left": SIDENAVS[13],
        "center": SIDENAVS[0],
        "right": SIDENAVS[17]
    },
    "service": {
        "left": SIDENAVS[14],
        "center": SIDENAVS[0],
        "right": SIDENAVS[18]
    },
    "configuration": {
        "left": SIDENAVS[17],
        "center": SIDENAVS[0],
        "right": SIDENAVS[23]
    },
    "storage": {
        "left": SIDENAVS[18],
        "center": SIDENAVS[0],
        "right": SIDENAVS[27]
    },
    "pods-controller-ii": {
        "left": SIDENAVS[23],
        "center": SIDENAVS[0],
        "right": SIDENAVS[31]
    },
    "access-control": {
        "left": SIDENAVS[27],
        "center": SIDENAVS[0],
        "right": {
            "url": [],
            "fragment": "",
            "text": "",
        }
    },
}