/**
 * Navigation data — ported from services/navs.ts, services/sidenavs.ts, services/bottomlinks.ts
 */

const NAVS = {
  empty: { url: [], text: '', class: '' },
  'kubernetes-documentation': { url: [''], text: 'Kubernetes Documentation', class: 'ml-0' },
  pendahuluan: { url: ['pendahuluan'], text: 'Pendahuluan', class: 'ml-3' },
  'apa-itu-kubernetes': { url: ['apa-itu-kubernetes'], text: 'Apa itu Kubernetes?', class: 'ml-3' },
  'menyiapkan-kubernetes': { url: ['menyiapkan-kubernetes'], text: 'Menyiapkan Kubernetes', class: 'ml-3' },
  'memasang-kubernetes': { url: ['menyiapkan-kubernetes', '1-memasang-kubernetes'], text: '1. Memasang Kubernetes', class: 'ml-4' },
  'membuat-cluster': { url: ['menyiapkan-kubernetes', '2-membuat-cluster'], text: '2. Membuat Cluster', class: 'ml-4' },
  'menggunakan-berkas-config-kubernetes': { url: ['menyiapkan-kubernetes', '3-menggunakan-berkas-config-kubernetes'], text: '3. Menggunakan berkas <em>config</em> Kubernetes', class: 'ml-4' },
  'mendaftarkan-private-docker-registry': { url: ['menyiapkan-kubernetes', '4-mendaftarkan-private-docker-registry'], text: '4. Mendaftarkan <em>private Docker registry</em>', class: 'ml-4' },
  'menghapus-node-dari-cluster': { url: ['menyiapkan-kubernetes', '5-menghapus-node-dari-cluster'], text: '5. Menghapus <em>Node</em> dari <em>Cluster</em>', class: 'ml-4' },
  'memasang-lens-tidak-wajib': { url: ['menyiapkan-kubernetes', '6-memasang-lens-tidak-wajib'], text: '6. Memasang Lens (tidak wajib)', class: 'ml-4' },
  'dasar-kubernetes': { url: ['dasar-kubernetes'], text: 'Dasar Kubernetes', class: 'ml-3' },
  node: { url: ['dasar-kubernetes', '1-node'], text: '1. Node', class: 'ml-4' },
  namespace: { url: ['dasar-kubernetes', '2-namespace'], text: '2. Namespace', class: 'ml-4' },
  pod: { url: ['dasar-kubernetes', '3-pod'], text: '3. Pod', class: 'ml-4' },
  'pods-controller': { url: ['dasar-kubernetes', '4-pods-controller'], text: '4. Pods Controller', class: 'ml-4' },
  deployment: { url: ['dasar-kubernetes', '4-pods-controller'], fragment: 'deployment', text: 'Deployment', class: 'ml-5' },
  daemonset: { url: ['dasar-kubernetes', '4-pods-controller'], fragment: 'daemonset', text: 'DaemonSet', class: 'ml-5' },
  service: { url: ['dasar-kubernetes', '5-service'], text: '5. Service', class: 'ml-4' },
  configuration: { url: ['dasar-kubernetes', '6-configuration'], text: '6. Configuration', class: 'ml-4' },
  configmap: { url: ['dasar-kubernetes', '6-configuration'], fragment: 'configmap', text: 'ConfigMap', class: 'ml-5' },
  secret: { url: ['dasar-kubernetes', '6-configuration'], fragment: 'secret', text: 'Secret', class: 'ml-5' },
  resourcequota: { url: ['dasar-kubernetes', '6-configuration'], fragment: 'resourcequota', text: 'ResourceQuota', class: 'ml-5' },
  limitrange: { url: ['dasar-kubernetes', '6-configuration'], fragment: 'limitrange', text: 'LimitRange', class: 'ml-5' },
  storage: { url: ['dasar-kubernetes', '7-storage'], text: '7. Storage', class: 'ml-4' },
  volume: { url: ['dasar-kubernetes', '7-storage'], fragment: 'volume', text: 'Volume', class: 'ml-5' },
  'persistentvolume--persistentvolumeclaim': { url: ['dasar-kubernetes', '7-storage'], fragment: 'persistentvolume--persistentvolumeclaim', text: 'PersistentVolume & PersistentVolumeClaim', class: 'ml-5' },
  storageclass: { url: ['dasar-kubernetes', '7-storage'], fragment: 'storageclass', text: 'StorageClass', class: 'ml-5' },
  'pods-controller-ii': { url: ['dasar-kubernetes', '8-pods-controller-ii'], text: '8. Pods Controller II', class: 'ml-4' },
  job: { url: ['dasar-kubernetes', '8-pods-controller-ii'], fragment: 'job', text: 'Job', class: 'ml-5' },
  cronjob: { url: ['dasar-kubernetes', '8-pods-controller-ii'], fragment: 'cronjob', text: 'CronJob', class: 'ml-5' },
  statefulset: { url: ['dasar-kubernetes', '8-pods-controller-ii'], fragment: 'statefulset', text: 'StatefulSet', class: 'ml-5' },
  'access-control': { url: ['dasar-kubernetes', '9-access-control'], text: '9. Access Control', class: 'ml-4' },
  serviceaccount: { url: ['dasar-kubernetes', '9-access-control'], fragment: 'serviceaccount', text: 'ServiceAccount', class: 'ml-5' },
  'role--rolebinding': { url: ['dasar-kubernetes', '9-access-control'], fragment: 'role--rolebinding', text: 'Role & RoleBinding', class: 'ml-5' }
};

const SIDENAVS = [
  NAVS.pendahuluan,
  NAVS['apa-itu-kubernetes'],
  NAVS['menyiapkan-kubernetes'],
  NAVS['memasang-kubernetes'],
  NAVS['membuat-cluster'],
  NAVS['menggunakan-berkas-config-kubernetes'],
  NAVS['mendaftarkan-private-docker-registry'],
  NAVS['menghapus-node-dari-cluster'],
  NAVS['memasang-lens-tidak-wajib'],
  NAVS['dasar-kubernetes'],
  NAVS.node,
  NAVS.namespace,
  NAVS.pod,
  NAVS['pods-controller'],
  NAVS.deployment,
  NAVS.daemonset,
  NAVS.service,
  NAVS.configuration,
  NAVS.configmap,
  NAVS.secret,
  NAVS.resourcequota,
  NAVS.limitrange,
  NAVS.storage,
  NAVS.volume,
  NAVS['persistentvolume--persistentvolumeclaim'],
  NAVS.storageclass,
  NAVS['pods-controller-ii'],
  NAVS.job,
  NAVS.cronjob,
  NAVS.statefulset,
  NAVS['access-control'],
  NAVS.serviceaccount,
  NAVS['role--rolebinding']
];

const BOTTOMLINKS = {
  home: { left: NAVS.empty, center: NAVS.empty, right: NAVS.pendahuluan },
  pendahuluan: { left: NAVS['kubernetes-documentation'], center: NAVS['kubernetes-documentation'], right: NAVS['apa-itu-kubernetes'] },
  'apa-itu-kubernetes': { left: NAVS.pendahuluan, center: NAVS['kubernetes-documentation'], right: NAVS['menyiapkan-kubernetes'] },
  'menyiapkan-kubernetes': { left: NAVS['apa-itu-kubernetes'], center: NAVS['kubernetes-documentation'], right: NAVS['memasang-kubernetes'] },
  '1-memasang-kubernetes': { left: NAVS['menyiapkan-kubernetes'], center: NAVS['kubernetes-documentation'], right: NAVS['membuat-cluster'] },
  '2-membuat-cluster': { left: NAVS['memasang-kubernetes'], center: NAVS['kubernetes-documentation'], right: NAVS['menggunakan-berkas-config-kubernetes'] },
  '3-menggunakan-berkas-config-kubernetes': { left: NAVS['membuat-cluster'], center: NAVS['kubernetes-documentation'], right: NAVS['mendaftarkan-private-docker-registry'] },
  '4-mendaftarkan-private-docker-registry': { left: NAVS['menggunakan-berkas-config-kubernetes'], center: NAVS['kubernetes-documentation'], right: NAVS['menghapus-node-dari-cluster'] },
  '5-menghapus-node-dari-cluster': { left: NAVS['mendaftarkan-private-docker-registry'], center: NAVS['kubernetes-documentation'], right: NAVS['memasang-lens-tidak-wajib'] },
  '6-memasang-lens-tidak-wajib': { left: NAVS['menghapus-node-dari-cluster'], center: NAVS['kubernetes-documentation'], right: NAVS['dasar-kubernetes'] },
  'dasar-kubernetes': { left: NAVS['memasang-lens-tidak-wajib'], center: NAVS['kubernetes-documentation'], right: NAVS.node },
  '1-node': { left: NAVS['dasar-kubernetes'], center: NAVS['kubernetes-documentation'], right: NAVS.namespace },
  '2-namespace': { left: NAVS.node, center: NAVS['kubernetes-documentation'], right: NAVS.pod },
  '3-pod': { left: NAVS.namespace, center: NAVS['kubernetes-documentation'], right: NAVS['pods-controller'] },
  '4-pods-controller': { left: NAVS.pod, center: NAVS['kubernetes-documentation'], right: NAVS.service },
  '5-service': { left: NAVS['pods-controller'], center: NAVS['kubernetes-documentation'], right: NAVS.configuration },
  '6-configuration': { left: NAVS.service, center: NAVS['kubernetes-documentation'], right: NAVS.storage },
  '7-storage': { left: NAVS.configuration, center: NAVS['kubernetes-documentation'], right: NAVS['pods-controller-ii'] },
  '8-pods-controller-ii': { left: NAVS.storage, center: NAVS['kubernetes-documentation'], right: NAVS['access-control'] },
  '9-access-control': { left: NAVS['pods-controller-ii'], center: NAVS['kubernetes-documentation'], right: NAVS.empty }
};

// Map route path to page file
const PAGE_MAP = {
  '': 'pages/home.html',
  'pendahuluan': 'pages/pendahuluan.html',
  'apa-itu-kubernetes': 'pages/apa-itu-kubernetes.html',
  'menyiapkan-kubernetes': 'pages/menyiapkan-kubernetes/index.html',
  'menyiapkan-kubernetes/1-memasang-kubernetes': 'pages/menyiapkan-kubernetes/1-memasang-kubernetes.html',
  'menyiapkan-kubernetes/2-membuat-cluster': 'pages/menyiapkan-kubernetes/2-membuat-cluster.html',
  'menyiapkan-kubernetes/3-menggunakan-berkas-config-kubernetes': 'pages/menyiapkan-kubernetes/3-menggunakan-berkas-config-kubernetes.html',
  'menyiapkan-kubernetes/4-mendaftarkan-private-docker-registry': 'pages/menyiapkan-kubernetes/4-mendaftarkan-private-docker-registry.html',
  'menyiapkan-kubernetes/5-menghapus-node-dari-cluster': 'pages/menyiapkan-kubernetes/5-menghapus-node-dari-cluster.html',
  'menyiapkan-kubernetes/6-memasang-lens-tidak-wajib': 'pages/menyiapkan-kubernetes/6-memasang-lens-tidak-wajib.html',
  'dasar-kubernetes': 'pages/dasar-kubernetes/index.html',
  'dasar-kubernetes/1-node': 'pages/dasar-kubernetes/1-node.html',
  'dasar-kubernetes/2-namespace': 'pages/dasar-kubernetes/2-namespace.html',
  'dasar-kubernetes/3-pod': 'pages/dasar-kubernetes/3-pod.html',
  'dasar-kubernetes/4-pods-controller': 'pages/dasar-kubernetes/4-pods-controller.html',
  'dasar-kubernetes/5-service': 'pages/dasar-kubernetes/5-service.html',
  'dasar-kubernetes/6-configuration': 'pages/dasar-kubernetes/6-configuration.html',
  'dasar-kubernetes/7-storage': 'pages/dasar-kubernetes/7-storage.html',
  'dasar-kubernetes/8-pods-controller-ii': 'pages/dasar-kubernetes/8-pods-controller-ii.html',
  'dasar-kubernetes/9-access-control': 'pages/dasar-kubernetes/9-access-control.html'
};

// Page metadata — title, description, keywords for SEO
const PAGE_META = {
  '': {
    title: 'Kubernetes Documentation — K8s Docs',
    description: 'Dokumentasi Kubernetes lengkap dalam Bahasa Indonesia. Panduan dari pengenalan, instalasi, hingga konsep lanjutan seperti Storage, Access Control, dan Pods Controller.',
    keywords: 'Kubernetes, K8s, dokumentasi, Indonesia, container, orchestration, Docker, cluster, node, pod, deployment, service'
  },
  'pendahuluan': {
    title: 'Pendahuluan — K8s Docs',
    description: 'Pengenalan Kubernetes: apa itu container orchestration, sejarah Kubernetes, dan mengapa Kubernetes menjadi standar industri untuk deployment aplikasi.',
    keywords: 'Kubernetes, pengenalan, container orchestration, sejarah Kubernetes, deployment'
  },
  'apa-itu-kubernetes': {
    title: 'Apa itu Kubernetes? — K8s Docs',
    description: 'Penjelasan mendalam tentang apa itu Kubernetes, arsitektur dasar, komponen-komponen utama, dan bagaimana Kubernetes mengelola container di lingkungan production.',
    keywords: 'Kubernetes, arsitektur, komponen, master node, worker node, control plane, kubelet, kube-proxy'
  },
  'menyiapkan-kubernetes': {
    title: 'Menyiapkan Kubernetes — K8s Docs',
    description: 'Panduan lengkap menyiapkan Kubernetes dari awal: instalasi, konfigurasi cluster, private Docker registry, dan tools pendukung seperti Lens.',
    keywords: 'Kubernetes, instalasi, setup, cluster, konfigurasi, Docker registry, Lens, kubectl'
  },
  'menyiapkan-kubernetes/1-memasang-kubernetes': {
    title: '1. Memasang Kubernetes — K8s Docs',
    description: 'Langkah-langkah memasang Kubernetes di berbagai environment: menggunakan kubeadm, minikube untuk local development, dan managed Kubernetes services.',
    keywords: 'memasang Kubernetes, kubeadm, minikube, instalasi Kubernetes, setup Kubernetes'
  },
  'menyiapkan-kubernetes/2-membuat-cluster': {
    title: '2. Membuat Cluster — K8s Docs',
    description: 'Panduan membuat dan mengonfigurasi cluster Kubernetes: inisialisasi control plane, menambahkan worker node, dan verifikasi cluster.',
    keywords: 'membuat cluster Kubernetes, control plane, worker node, join node, kubeadm init'
  },
  'menyiapkan-kubernetes/3-menggunakan-berkas-config-kubernetes': {
    title: '3. Menggunakan Berkas Config Kubernetes — K8s Docs',
    description: 'Memahami dan menggunakan berkas kubeconfig untuk mengelola akses ke cluster Kubernetes: konteks, user, dan multiple cluster.',
    keywords: 'kubeconfig, konfigurasi Kubernetes, kubectl config, context, multiple cluster'
  },
  'menyiapkan-kubernetes/4-mendaftarkan-private-docker-registry': {
    title: '4. Mendaftarkan Private Docker Registry — K8s Docs',
    description: 'Cara mendaftarkan dan menggunakan private Docker registry di Kubernetes: membuat secret, konfigurasi imagePullSecrets, dan best practices.',
    keywords: 'private Docker registry, imagePullSecrets, Docker secret, container registry, Kubernetes'
  },
  'menyiapkan-kubernetes/5-menghapus-node-dari-cluster': {
    title: '5. Menghapus Node dari Cluster — K8s Docs',
    description: 'Prosedur menghapus node dari cluster Kubernetes dengan aman: drain, cordon, dan delete node tanpa mengganggu workload yang berjalan.',
    keywords: 'menghapus node Kubernetes, drain node, cordon, delete node, maintenance cluster'
  },
  'menyiapkan-kubernetes/6-memasang-lens-tidak-wajib': {
    title: '6. Memasang Lens (Tidak Wajib) — K8s Docs',
    description: 'Panduan memasang dan menggunakan Lens — IDE untuk Kubernetes: monitoring cluster, manajemen resource, dan troubleshooting visual.',
    keywords: 'Lens Kubernetes, IDE Kubernetes, monitoring cluster, manajemen Kubernetes, Lens IDE'
  },
  'dasar-kubernetes': {
    title: 'Dasar Kubernetes — K8s Docs',
    description: 'Konsep dasar Kubernetes: Node, Namespace, Pod, Deployment, Service, Configuration, Storage, dan Access Control. Panduan lengkap untuk pemula.',
    keywords: 'dasar Kubernetes, Node, Namespace, Pod, Deployment, Service, ConfigMap, Secret, Storage'
  },
  'dasar-kubernetes/1-node': {
    title: '1. Node — K8s Docs',
    description: 'Memahami Node di Kubernetes: arsitektur, komponen kubelet dan kube-proxy, manajemen node, cordon, drain, dan monitoring status node.',
    keywords: 'Node Kubernetes, kubelet, kube-proxy, worker node, cordon, drain, status node'
  },
  'dasar-kubernetes/2-namespace': {
    title: '2. Namespace — K8s Docs',
    description: 'Mengelola Namespace di Kubernetes: isolasi resource, resource quota, default namespace, dan best practices untuk multi-tenant environment.',
    keywords: 'Namespace Kubernetes, isolasi resource, resource quota, multi-tenant, default namespace'
  },
  'dasar-kubernetes/3-pod': {
    title: '3. Pod — K8s Docs',
    description: 'Memahami Pod — unit terkecil di Kubernetes: lifecycle, multi-container pod, init container, resource request/limit, dan health checks.',
    keywords: 'Pod Kubernetes, lifecycle pod, multi-container, init container, health check, liveness probe, readiness probe'
  },
  'dasar-kubernetes/4-pods-controller': {
    title: '4. Pods Controller — K8s Docs',
    description: 'Pods Controller di Kubernetes: Deployment untuk stateless apps dan DaemonSet untuk menjalankan pod di setiap node. Strategi update dan rollback.',
    keywords: 'Pods Controller, Deployment, DaemonSet, ReplicaSet, rolling update, rollback, stateless'
  },
  'dasar-kubernetes/5-service': {
    title: '5. Service — K8s Docs',
    description: 'Service di Kubernetes: ClusterIP, NodePort, LoadBalancer, dan ExternalName. Service discovery, kube-proxy, dan networking di Kubernetes.',
    keywords: 'Service Kubernetes, ClusterIP, NodePort, LoadBalancer, ExternalName, kube-proxy, service discovery'
  },
  'dasar-kubernetes/6-configuration': {
    title: '6. Configuration — K8s Docs',
    description: 'Manajemen konfigurasi di Kubernetes: ConfigMap untuk data non-sensitif, Secret untuk data sensitif, ResourceQuota dan LimitRange untuk kontrol resource.',
    keywords: 'ConfigMap, Secret, ResourceQuota, LimitRange, konfigurasi Kubernetes, environment variable'
  },
  'dasar-kubernetes/7-storage': {
    title: '7. Storage — K8s Docs',
    description: 'Storage di Kubernetes: Volume, PersistentVolume, PersistentVolumeClaim, dan StorageClass. Provisioning dinamis dan manajemen persistent storage.',
    keywords: 'Storage Kubernetes, Volume, PersistentVolume, PersistentVolumeClaim, StorageClass, PV, PVC'
  },
  'dasar-kubernetes/8-pods-controller-ii': {
    title: '8. Pods Controller II — K8s Docs',
    description: 'Pods Controller lanjutan: Job untuk batch processing, CronJob untuk scheduled jobs, dan StatefulSet untuk aplikasi stateful dengan persistent identity.',
    keywords: 'Job Kubernetes, CronJob, StatefulSet, batch processing, scheduled job, stateful application'
  },
  'dasar-kubernetes/9-access-control': {
    title: '9. Access Control — K8s Docs',
    description: 'Access Control di Kubernetes: ServiceAccount, Role, RoleBinding, ClusterRole, dan ClusterRoleBinding. RBAC untuk mengelola izin akses.',
    keywords: 'Access Control Kubernetes, RBAC, ServiceAccount, Role, RoleBinding, ClusterRole, ClusterRoleBinding'
  }
};
