import { bottomLink, NAVS } from './navs';

interface bottomlinks {
    [key: string]: bottomLink;
}

export const BOTTOMLINKS: bottomlinks = {
    "default": {
        "left": NAVS["empty"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["empty"]
    },
    "home": {
        "left": NAVS["empty"],
        "center": NAVS["empty"],
        "right": NAVS["pendahuluan"]
    },
    "pendahuluan": {
        "left": NAVS["kubernetes-documentation"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["apa-itu-kubernetes"]
    },
    "apa-itu-kubernetes": {
        "left": NAVS["pendahuluan"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["menyiapkan-kubernetes"]
    },
    "menyiapkan-kubernetes": {
        "left": NAVS["apa-itu-kubernetes"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["memasang-kubernetes"]
    },
    "memasang-kubernetes": {
        "left": NAVS["menyiapkan-kubernetes"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["membuat-cluster"]
    },
    "membuat-cluster": {
        "left": NAVS["memasang-kubernetes"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["menggunakan-berkas-config-kubernetes"]
    },
    "menggunakan-berkas-config-kubernetes": {
        "left": NAVS["membuat-cluster"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["mendaftarkan-private-docker-registry"]
    },
    "mendaftarkan-private-docker-registry": {
        "left": NAVS["menggunakan-berkas-config-kubernetes"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["menghapus-node-dari-cluster"]
    },
    "menghapus-node-dari-cluster": {
        "left": NAVS["mendaftarkan-private-docker-registry"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["memasang-lens-tidak-wajib"]
    },
    "memasang-lens-tidak-wajib": {
        "left": NAVS["menghapus-node-dari-cluster"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["dasar-kubernetes"]
    },
    "dasar-kubernetes": {
        "left": NAVS["memasang-lens-tidak-wajib"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["node"]
    },
    "node": {
        "left": NAVS["dasar-kubernetes"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["namespace"]
    },
    "namespace": {
        "left": NAVS["node"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["pod"]
    },
    "pod": {
        "left": NAVS["namespace"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["pods-controller"]
    },
    "pods-controller": {
        "left": NAVS["pod"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["service"]
    },
    "service": {
        "left": NAVS["pods-controller"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["configuration"]
    },
    "configuration": {
        "left": NAVS["service"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["storage"]
    },
    "storage": {
        "left": NAVS["configuration"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["pods-controller-ii"]
    },
    "pods-controller-ii": {
        "left": NAVS["storage"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["access-control"]
    },
    "access-control": {
        "left": NAVS["pods-controller-ii"],
        "center": NAVS["kubernetes-documentation"],
        "right": NAVS["empty"]
    },
}