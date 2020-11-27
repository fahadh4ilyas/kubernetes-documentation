export interface urlName {
    url: string[];
    fragment?: string;
    text: string;
    class?: string;
}

export interface bottomLink {
    left: urlName;
    center: urlName;
    right: urlName;
}

interface navs {
    [keys: string]: urlName
}

export const NAVS: navs = {
    "empty": {
      url: [],
      text: ""
    },
    "kubernetes-documentation": {
      url: ["/"],
      text: "Kubernetes Documentation",
      class: "ml-1"
    },
    "pendahuluan": {
      url: ["/pendahuluan"],
      text: "Pendahuluan",
      class: "ml-3"
    },
    "apa-itu-kubernetes": {
      url: ["/apa-itu-kubernetes"],
      text: "Apa itu Kubernetes?",
      class: "ml-3"
    },
    "menyiapkan-kubernetes": {
      url: ["/menyiapkan-kubernetes"],
      text: "Menyiapkan Kubernetes",
      class: "ml-3"
    },
    "memasang-kubernetes": {
      url: ["/menyiapkan-kubernetes", "1-memasang-kubernetes"],
      text: "1. Memasang Kubernetes",
      class: "ml-4"
    },
    "membuat-cluster": {
      url: ["/menyiapkan-kubernetes", "2-membuat-cluster"],
      text: "2. Membuat Cluster",
      class: "ml-4"
    },
    "menggunakan-berkas-config-kubernetes": {
      url: ["/menyiapkan-kubernetes", "3-menggunakan-berkas-config-kubernetes"],
      text: "3. Menggunakan berkas <em>config</em> Kubernetes",
      class: "ml-4"
    },
    "mendaftarkan-private-docker-registry": {
      url: ["/menyiapkan-kubernetes", "4-mendaftarkan-private-docker-registry"],
      text: "4. Mendaftarkan <em>private Docker registry</em>",
      class: "ml-4"
    },
    "menghapus-node-dari-cluster": {
      url: ["/menyiapkan-kubernetes", "5-menghapus-node-dari-cluster"],
      text: "5. Menghapus <em>Node</em> dari <em>Cluster</em>",
      class: "ml-4"
    },
    "memasang-lens-tidak-wajib": {
      url: ["/menyiapkan-kubernetes", "6-memasang-lens-tidak-wajib"],
      text: "6. Memasang Lens (tidak wajib)",
      class: "ml-4"
    },
    "dasar-kubernetes": {
      url: ["/dasar-kubernetes"],
      text: "Dasar Kubernetes",
      class: "ml-3"
    },
    "node": {
      url: ["/dasar-kubernetes", "1-node"],
      text: "1. Node",
      class: "ml-4"
    },
    "namespace": {
      url: ["/dasar-kubernetes", "2-namespace"],
      text: "2. Namespace",
      class: "ml-4"
    },
    "pod": {
      url: ["/dasar-kubernetes", "3-pod"],
      text: "3. Pod",
      class: "ml-4"
    },
    "pods-controller": {
      url: ["/dasar-kubernetes", "4-pods-controller"],
      text: "4. Pods Controller",
      class: "ml-4"
    },
    "deployment": {
      url: ["/dasar-kubernetes", "4-pods-controller"],
      fragment: "deployment",
      text: "Deployment",
      class: "ml-5"
    },
    "daemonset": {
      url: ["/dasar-kubernetes", "4-pods-controller"],
      fragment: "daemonset",
      text: "DaemonSet",
      class: "ml-5"
    },
    "service": {
      url: ["/dasar-kubernetes", "5-service"],
      text: "5. Service",
      class: "ml-4"
    },
    "configuration": {
      url: ["/dasar-kubernetes", "6-configuration"],
      text: "6. Configuration",
      class: "ml-4"
    },
    "configmap": {
      url: ["/dasar-kubernetes", "6-configuration"],
      fragment: "configmap",
      text: "ConfigMap",
      class: "ml-5"
    },
    "secret": {
      url: ["/dasar-kubernetes", "6-configuration"],
      fragment: "secret",
      text: "Secret",
      class: "ml-5"
    },
    "resourcequota": {
      url: ["/dasar-kubernetes", "6-configuration"],
      fragment: "resourcequota",
      text: "ResourceQuota",
      class: "ml-5"
    },
    "limitrange": {
      url: ["/dasar-kubernetes", "6-configuration"],
      fragment: "limitrange",
      text: "LimitRange",
      class: "ml-5"
    },
    "storage": {
      url: ["/dasar-kubernetes", "7-storage"],
      text: "7. Storage",
      class: "ml-4"
    },
    "volume": {
      url: ["/dasar-kubernetes", "7-storage"],
      fragment: "volume",
      text: "Volume",
      class: "ml-5"
    },
    "persistentvolume--persistentvolumeclaim": {
      url: ["/dasar-kubernetes", "7-storage"],
      fragment: "persistentvolume--persistentvolumeclaim",
      text: "PersistentVolume & PersistentVolumeClaim",
      class: "ml-5"
    },
    "storageclass": {
      url: ["/dasar-kubernetes", "7-storage"],
      fragment: "storageclass",
      text: "StorageClass",
      class: "ml-5"
    },
    "pods-controller-ii": {
      url: ["/dasar-kubernetes", "8-pods-controller-ii"],
      text: "8. Pods Controller II",
      class: "ml-4"
    },
    "job": {
      url: ["/dasar-kubernetes", "8-pods-controller-ii"],
      fragment: "job",
      text: "Job",
      class: "ml-5"
    },
    "cronjob": {
      url: ["/dasar-kubernetes", "8-pods-controller-ii"],
      fragment: "cronjob",
      text: "CronJob",
      class: "ml-5"
    },
    "statefulset": {
      url: ["/dasar-kubernetes", "8-pods-controller-ii"],
      fragment: "statefulset",
      text: "StatefulSet",
      class: "ml-5"
    },
    "access-control": {
      url: ["/dasar-kubernetes", "9-access-control"],
      text: "9. Access Control",
      class: "ml-4"
    },
    "serviceaccount": {
      url: ["/dasar-kubernetes", "9-access-control"],
      fragment: "serviceaccount",
      text: "ServiceAccount",
      class: "ml-5"
    },
    "role--rolebinding": {
      url: ["/dasar-kubernetes", "9-access-control"],
      fragment: "role--rolebinding",
      text: "Role & RoleBinding",
      class: "ml-5"
    }
}