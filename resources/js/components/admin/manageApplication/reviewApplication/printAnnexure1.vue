<template>
    <section class="page-main">
        <div class="container">
            <div class="row">
                <!-- <div class="col-xl-2 mt-3 pr-1">
                    <p class="text-white mb-2 font-xl" style="background: #000000;">&nbsp;Annexure I<br></p>
                </div> -->

                <div class="col-xl-12 text-center mb-1" style="color:#000000">
                        <h3 class="text-uppercase"><strong>Annexure - I</strong></h3>
                    </div>
                    <div class="col-xl-12 text-center mb-1" style="color:#000000">
                        <h6 class="text-uppercase"><strong>{{form.scholarshipType}} scholarship PROGRAMME - {{form.financialYear}}</strong></h6>
                        <h6 class="text-uppercase text-center"><strong>Applicant Name : {{form.fullName}}</strong></h6>
                        <h6 class="text-uppercase"><strong>Application No : {{form.appIdShow}} (submitted online)</strong></h6>
                    </div>
                    <div class="col-md-10 col-xl-12 text-center mb-1">
                        <hr class="cs-hr">
                    </div>
                <div class="col-xl-12 mt-3">
                    <p class="font-md" style="color : #000"><strong>I&nbsp;{{form.applicantNameF}} {{form.applicantNameM}} {{form.applicantNameL}}, {{getData.genderType}}&nbsp;of {{form.applicantFatherName}},&nbsp; residing in&nbsp;{{form.addressAddln1}}, want to pursue course in {{courseNameValueId2}} In academic year&nbsp;{{form.financialYear}}. I will be taking the following Entrance Examination for admission into  {{courseNameValueId2}}.</strong><br></p>
                </div>
                <div class="col-xl-12">
                    <h5><strong style="color : #000">Institutes Selected:&nbsp;</strong></h5>
                </div>
                <div class="col-xl-12">
                    <div class="table-responsive table-bordered rev-tbl">
                        <table class="table table-bordered table-sm mb-0">
                            <thead>
                                <tr>
                                    <th>Institute Name</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="fw-600" v-for="(row,index) in rows" :key="index">
                                    <td><strong>{{index+1}}. {{row.get_institute.instituteName}}</strong><br></td>
                                    <td><strong>{{row.addressCity}} {{row.addressDistprov}} {{row.addressState}}</strong><br></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 offset-xl-4 d-print-none text-center">
                    <button class="btn btn-sm btn-mg mt-5" role="button"  onclick="window.print()">Print/Download Annexure - I</button>
                    <router-link class="btn btn-sm btn-mg mt-5 mr-2" :to="'/admin/review/'+form.applicationId">Cancel</router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default{
    data(){
        return{
            userId:'',
            // update: false,
            globalDisable: false,
            universityCourseLevel:{},
            universityCourseName: {},
            insData:{},
            insDataDetails:{
                address1: '',
            },
           
            courseLevelValueId2: '',
            courseNameValueId2: '',

            domainForm: {
                domainName : 'CourseName',
                dValue : '',
                dDesc : '',
            },
            insId: '',
            insForm: {
                
                insType:'',
                insName:'',
                insAddressAddln1:'',
                insAddressAddln2:'',
                insAddressCity:'',
                insAddressDistprov:'',
                insAddressState:'',
                insAddressPinzip:'',
            },
            form:
            {
                // courseLevel:'',
                fullname:'',
                hasAdmissionLetter:'',
                applicationId:'',
                scholarshipType: '',
                financialYear:'',
                applicantNameF:'',
                applicantNameM:'',
                applicantNameL:'',
                applicantFatherName:'',
                applicantMotherName:'',
                addressAddln1:'',
                applicantGender:'',
                appIdShow:'',
            },

            getData :{
                genderType : '',
            },
            
            errors:[],
            rows: 
            [
              {  
                insId : '',
                courseLevelValueId: '',
                courseNameValueId: '',
                addressAddln1 : '',
                addressAddln2 :'',
                addressCity : '',
                addressDistprov : '',
                addressState : '',
                addressPinzip : '',
              },
            ],
          }
    },
    methods: {
        
        async readApplicationForm() 
        {
            let applicationId = window.location.pathname.split('/').reverse()[0];
            axios.get(`/admin/admin-api/get-application-form-data/${applicationId}`)
            .then(response => {
                if (response.data['success']) 
                {
                    this.form.applicationId=response.data['data'][0][0].schApplicationId;
                    this.form.scholarshipType=response.data['data'][0][0].scholarshipType;
                    this.form.applicantNameF=response.data['data'][0][0].applicantNameF;
                    this.form.applicantNameM=response.data['data'][0][0].applicantNameM;
                    this.form.applicantNameL=response.data['data'][0][0].applicantNameL;
                    this.form.applicantFatherName=response.data['data'][0][0].applicantFatherName;
                    this.form.applicantMotherName=response.data['data'][0][0].applicantMotherName;
                    this.form.financialYear = response.data['data'][0][0].financialYear;  
                    this.form.hasAdmissionLetter = response.data['data'][0][0].hasAdmissionLetter;
                    this.form.addressAddln1=response.data['data'][0][0].get_address.addressAddln1;
                    this.insForm.insType = response.data['data'][0][0].scholarshipType;
                    this.form.appIdShow = response.data['data'][0][0].appIdShow;
                    this.form.fullName = response.data['data'][0][0].applicantNameF+' '+ (response.data['data'][0][0].applicantNameM == null ? ' ' : response.data['data'][0][0].applicantNameM )+' '+response.data['data'][0][0].applicantNameL;   
                    
                    if(this.form.applicantGender=response.data['data'][0][0].applicantGender == "Male")
                    {
                        this.getData.genderType = "son";
                    }else{
                        this.getData.genderType = "daughter";
                    };
                    this.form.appStatus = response.data['data'][0][0].appStatus;
                    if(this.form.appStatus == 'Submit')
                    {
                        this.globalDisable = true;
                    };
                    this.readDomainValues(this.form.scholarshipType);
                    this.readInsValue(this.form.scholarshipType);
                } 
                else {
                    console.log(response.data['msg'])
                }
            })
        },

         getannexurei() {
            let applicationId = window.location.pathname.split('/').reverse()[0];
            axios.get(`/admin/admin-api/get-annexure1/${applicationId}`)
            .then(response => {
                if (response.data['success']) {
                    this.rows = response.data['data'];
                    if(this.form.scholarshipType == "Nursing")
                    {
                        this.courseLevelValueId2 = response.data['data'][0].get_course_level_value.description;
                        this.courseNameValueId2  = response.data['data'][0].get_course_level_name.value;
                    }else
                    {
                        this.courseLevelValueId2 = response.data['data'][0].get_course_level_value.description;
                        this.courseNameValueId2  = response.data['data'][0].get_course_level_name.value;
                    }
                    this.getHHDLSData2(this.courseLevelValueId2);
                    this.update = true;
                } else {
                    let applicationId = window.location.pathname.split('/').reverse()[0];
                    // axios.get(`/api/get-application-form-data/${applicationId}`)
                    // .then(response => {
                    //     if (response.data['success']) 
                    //     {
                    //         this.form.applicationId=response.data['data'][0][0].schApplicationId;
                    //     } 
                    //     else {
                    //         console.log(response.data['msg'])
                    //     }
                    // })
                    // // this.readApplicationForm();
                    this.$router.push({ 
                        path:'/admin/review/'+applicationId,
                    });
                    this.$fire({
                        position: 'top',
                        icon: 'error',
                        title: "Cannot view - Please fill up Annexure 1",
                        showConfirmButton: false,
                        timer: 3000
                    })
                    this.update = false;
                }
            })
        },
    
        readInsValue(type)
        {
            axios.get('/admin/admin-api/institute/get-data/'+type)
                .then(response => {
                    this.insData = response.data;
                });
        },

    

        // getDataMethod(insId,index)
        // {
        //     console.lof(insId);
        //     axios.get('/api/institute/get-details/'+insId)
        //     .then(response => {
        //         if (response.data['success']) {
        //             this.rows[index].addressAddln1 = response.data['data'][0].get_address.addressAddln1;
        //             this.rows[index].addressAddln2 = response.data['data'][0].get_address.addressAddln2;
        //             this.rows[index].addressCity = response.data['data'][0].get_address.addressCity;
        //             this.rows[index].addressDistprov = response.data['data'][0].get_address.addressDistprov;
        //             this.rows[index].addressState = response.data['data'][0].get_address.addressState;
        //             this.rows[index].addressPinzip = response.data['data'][0].get_address.addressPinzip;
        //         } else {
        //             console.log(response.data['msg'])
        //         }
        //     }).catch(error => this.errorMsg(error.response.status))
        // },

     
        getHHDLSData2(id)
        {
            
            axios.get('/admin/admin-api/domain/course-name/hhdls/'+id)
                .then(response => {
                    this.universityCourseName = response.data;
                });  
        },
      
    },
    created(){
        // this.readInsValue();
        // this.readDomainValues();
        this.readApplicationForm();
        this.getannexurei();
    }
 }
</script>
